<?php

namespace App\Data;

use App\Enums\TransactionTypeEnum;
use Illuminate\Validation\Rule;
use Spatie\LaravelData\Data;

class CreateTransactionData extends Data
{
    public function __construct(
        public readonly int $user_id,
        public readonly int $asset_id,
        public readonly TransactionTypeEnum $type,
        public readonly int $quantity,
    ) {}

    public static function rules(): array
    {
        return [
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'asset_id' => ['required', 'integer', 'exists:assets,id'],
            'type' => ['required', Rule::enum(TransactionTypeEnum::class)],
            'quantity' => ['required', 'integer', 'min:1'],
        ];
    }
}
