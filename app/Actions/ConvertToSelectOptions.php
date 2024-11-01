<?php

namespace App\Actions;

use Illuminate\Support\Collection;
use Lorisleiva\Actions\Concerns\AsAction;

class ConvertToSelectOptions
{
    use AsAction;

    public function handle(Collection $items, string $valueKey = 'id', string|callable $label = 'name'): Collection
    {
        return $items->map(function ($each) use ($valueKey, $label) {
            $labelValue = is_callable($label) ? $label($each) : $each[$label] ?? '';

            return [
                'value' => $each[$valueKey],
                'label' => $labelValue,
            ];
        });
    }
}
