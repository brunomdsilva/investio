<?php

namespace App\Data;

use App\Enums\TransactionTypeEnum;
use Carbon\Carbon;
use Illuminate\Validation\Rule;
use Spatie\LaravelData\Attributes\Computed;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class TransactionData extends Data
{
    #[Computed]
    public string $typeLabel;

    public function __construct(
        public AssetData $asset,
        public TransactionTypeEnum $type,
        public int $quantity,
        public float $unit_value,
        public float $total_value,
        public Carbon $created_at,
    ) {
        $this->typeLabel = $type->getLabel();
    }

    public static function rules(): array
    {
        return [
            'asset' => ['required', 'exists:assets,id'],
            'type' => ['required', Rule::enum(TransactionTypeEnum::class)],
            'quantity' => ['required', 'integer', 'min:1'],
            'unit_value' => ['required', 'numeric', 'min:0'],
            'total_value' => ['required', 'numeric', 'min:0'],
        ];
    }
}
