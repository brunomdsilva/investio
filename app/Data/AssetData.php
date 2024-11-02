<?php

namespace App\Data;

use App\Enums\AssetTypeEnum;
use Spatie\LaravelData\Attributes\Computed;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class AssetData extends Data
{
    #[Computed]
    public string $typeLabel;

    public function __construct(
        public string $name,
        public string $ticker,
        public float $current_value,
        public AssetTypeEnum $type,
    ) {
        $this->typeLabel = $type->getLabel();
    }
}
