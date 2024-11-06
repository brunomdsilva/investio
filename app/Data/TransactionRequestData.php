<?php

namespace App\Data;

use App\Enums\TransactionTypeEnum;
use App\Models\Holding;
use Illuminate\Validation\Rule;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Support\Validation\ValidationContext;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class TransactionRequestData extends Data
{
    public function __construct(
        public ?string $user_id,
        public ?string $asset_id,
        public TransactionTypeEnum $type,
        public ?string $quantity,
    ) {}

    public static function rules(ValidationContext $context): array
    {
        $payload = $context->payload;

        return [
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'asset_id' => ['required', 'integer', 'exists:assets,id'],
            'type' => ['required', Rule::enum(TransactionTypeEnum::class)],
            'quantity' => [
                'required',
                'integer',
                'min:1',
                function ($attribute, $value, $fail) use ($payload) {
                    if ($payload['type'] === TransactionTypeEnum::Sell->value) {
                        $currentHoldings = Holding::query()
                            ->where('user_id', $payload['user_id'])
                            ->where('asset_id', $payload['asset_id'])
                            ->first()
                            ->owned_quantity ?? 0;

                        if ($value > $currentHoldings) {
                            $fail("You don't have enough holdings. Your current balance is {$currentHoldings}.");
                        }
                    }
                },
            ],
        ];
    }
}
