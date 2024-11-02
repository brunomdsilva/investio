<?php

namespace App\Data;

use App\Enums\TransactionTypeEnum;
use Carbon\Carbon;
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
}
