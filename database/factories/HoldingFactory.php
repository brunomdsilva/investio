<?php

namespace Database\Factories;

use App\Models\Asset;
use App\Models\Holding;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class HoldingFactory extends Factory
{
    protected $model = Holding::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'asset_id' => Asset::factory(),
            'owned_quantity' => $this->faker->randomNumber(2),
        ];
    }
}
