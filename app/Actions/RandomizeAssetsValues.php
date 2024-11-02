<?php

namespace App\Actions;

use App\Models\Asset;
use Lorisleiva\Actions\Concerns\AsAction;

class RandomizeAssetsValues
{
    use AsAction;

    public function handle()
    {
        Asset::all()
            ->each(function (Asset $asset) {
                $variation = round((random_int(5, 60) / 100), 2);
                $valueVariation = $asset->current_value * $variation;
                $newValue = $asset->current_value + random_int(-$valueVariation, $valueVariation);

                $asset->update([
                    'current_value' => $newValue,
                ]);
            });
    }
}
