<?php

namespace App\Actions;

use App\Models\Asset;
use Illuminate\Routing\Router;
use Lorisleiva\Actions\Concerns\AsAction;

class GetAssets
{
    use AsAction;

    public static function routes(Router $router): void
    {
        $router->get('/get/assets', static::class)
            ->middleware('web')
            ->name('assets.get');
    }

    public function handle()
    {
        return Asset::all();
    }
}
