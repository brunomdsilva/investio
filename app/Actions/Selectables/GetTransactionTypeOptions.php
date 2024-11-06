<?php

namespace App\Actions\Selectables;

use App\Enums\TransactionTypeEnum;
use Illuminate\Routing\Router;
use Lorisleiva\Actions\Concerns\AsAction;
use Spatie\LaravelOptions\Options;

class GetTransactionTypeOptions
{
    use AsAction;

    public static function routes(Router $router): void
    {
        $router->get('/options/transaction-types', static::class)
            ->middleware('web')
            ->name('options.transaction-types');
    }

    public function handle()
    {
        return Options::forEnum(TransactionTypeEnum::class)->toArray();
    }
}
