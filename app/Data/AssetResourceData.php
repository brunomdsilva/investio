<?php

namespace App\Data;

use App\Enums\AssetTypeEnum;
use Spatie\LaravelData\Attributes\Computed;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class AssetResourceData extends Data
{
    #[Computed]
    public string $typeLabel;

    #[Computed]
    public string $typeColor;

    public function __construct(
        public ?int $id,
        public string $name,
        public string $ticker,
        public AssetTypeEnum $type,
        public float $current_value,
    ) {
        $this->typeLabel = $type->getLabel();
        $this->typeColor = $type->getColor();
    }
}
