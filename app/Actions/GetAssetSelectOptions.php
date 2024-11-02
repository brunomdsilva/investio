<?php

namespace App\Actions;

use App\Data\AssetData;
use App\Models\Asset;
use Illuminate\Routing\Router;
use Lorisleiva\Actions\Concerns\AsAction;

class GetAssetSelectOptions
{
    use AsAction;

    public static function routes(Router $router): void
    {
        $router->get('/assets/get', static::class)
            ->middleware('web')
            ->name('assets.get');
    }

    public function handle()
    {
        return AssetData::collect(
            Asset::all()
        );
    }
}
