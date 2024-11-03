<?php

namespace App\Data;

use App\Enums\AssetTypeEnum;
use Illuminate\Validation\Rule;
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

    public static function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'ticker' => ['required', 'string', 'max:10'],
            'current_value' => ['required', 'numeric', 'min:0'],
            'type' => ['required', Rule::enum(AssetTypeEnum::class)],
        ];
    }
}
