<?php

namespace Database\Factories;

use App\Enums\InvestmentTypeEnum;
use App\Models\Investment;
use Illuminate\Database\Eloquent\Factories\Factory;

class InvestmentFactory extends Factory
{
    protected $model = Investment::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->company(),
            'ticker' => strtoupper($this->faker->lexify()),
            'current_value' => $this->faker->randomFloat(2, 100, 999999.99),
            'type' => $this->faker->randomElement(InvestmentTypeEnum::class),
        ];
    }
}
