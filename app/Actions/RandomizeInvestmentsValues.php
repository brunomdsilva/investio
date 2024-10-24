<?php

namespace App\Actions;

use App\Models\Investment;
use Lorisleiva\Actions\Concerns\AsAction;

class RandomizeInvestmentsValues
{
    use AsAction;

    public function handle()
    {
        Investment::all()
            ->each(function (Investment $investment) {
                $variation = round((random_int(5, 60) / 100), 2);
                $valueVariation = $investment->current_value * $variation;
                $newValue = $investment->current_value + random_int(-$valueVariation, $valueVariation);

                $investment->update([
                    'current_value' => $newValue,
                ]);
            });
    }
}
