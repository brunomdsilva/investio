<?php

namespace App\Data;

use App\Enums\InvestmentTypeEnum;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class InvestmentData extends Data
{
    public function __construct(
        public string $name,
        public string $ticker,
        public float $current_value,
        public InvestmentTypeEnum $type,
    ) {}
}
