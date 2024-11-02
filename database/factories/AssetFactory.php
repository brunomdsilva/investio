<?php

namespace Database\Factories;

use App\Enums\AssetTypeEnum;
use App\Models\Asset;
use Illuminate\Database\Eloquent\Factories\Factory;

class AssetFactory extends Factory
{
    protected $model = Asset::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->company(),
            'ticker' => strtoupper($this->faker->lexify()),
            'current_value' => $this->faker->randomFloat(2, 100, 999999.99),
            'type' => $this->faker->randomElement(AssetTypeEnum::class),
        ];
    }
}
