<?php

namespace Database\Factories;

use App\Models\Investment;
use App\Models\User;
use App\Models\UserInvestment;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserInvestmentFactory extends Factory
{
    protected $model = UserInvestment::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'investment_id' => Investment::factory(),
            'owned_quantity' => $this->faker->randomNumber(2),
        ];
    }
}
