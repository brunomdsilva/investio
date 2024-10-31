<?php

namespace App\Data;

use App\Enums\TransactionTypeEnum;
use Carbon\Carbon;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class TransactionData extends Data
{
    public function __construct(
        public InvestmentData $investment,
        public TransactionTypeEnum $type,
        public int $quantity,
        public float $unit_value,
        public float $total_value,
        public Carbon $created_at,
    ) {}
}
