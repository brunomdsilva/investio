<?php

namespace App\Data;

use App\Enums\AssetTypeEnum;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class AssetData extends Data
{
    public function __construct(
        public string $name,
        public string $ticker,
        public float $current_value,
        public AssetTypeEnum $type,
    ) {}
}
