<?php

namespace App\Actions\Selectables;

use App\Models\Asset;
use Illuminate\Routing\Router;
use Lorisleiva\Actions\Concerns\AsAction;
use Spatie\LaravelOptions\Options;

class GetAssetOptions
{
    use AsAction;

    public static function routes(Router $router): void
    {
        $router->get('/options/assets', static::class)
            ->middleware('web')
            ->name('options.assets');
    }

    public function asController()
    {
        return $this->handle();
    }

    public function handle()
    {
        return Options::forModels(Asset::class)->toArray();
    }
}
