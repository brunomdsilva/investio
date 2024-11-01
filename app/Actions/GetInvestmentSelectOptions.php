<?php

namespace App\Actions;

use App\Data\InvestmentData;
use App\Models\Investment;
use Illuminate\Routing\Router;
use Lorisleiva\Actions\Concerns\AsAction;

class GetInvestmentSelectOptions
{
    use AsAction;

    public static function routes(Router $router): void
    {
        $router->get('/investments/get', static::class)
            ->middleware('web')
            ->name('investments.get');
    }

    public function handle()
    {
        return InvestmentData::collect(
            Investment::all()
        );
    }
}
