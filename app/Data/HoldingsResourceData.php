<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

/**
 * @property int $id
 * @property int $user_id
 * @property int $asset_id
 * @property int $owned_quantity
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
#[TypeScript]
class HoldingsResourceData extends Data
{
    public function __construct(
        public AssetResourceData $asset,
        public int $owned_quantity,
    ) {}
}
