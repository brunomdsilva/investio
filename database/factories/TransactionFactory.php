<?php

namespace Database\Factories;

use App\Enums\TransactionTypeEnum;
use App\Models\Asset;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TransactionFactory extends Factory
{
    protected $model = Transaction::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'asset_id' => Asset::factory(),
            'type' => $this->faker->randomElement(TransactionTypeEnum::class),
            'quantity' => $this->faker->randomNumber(2),
            'unit_value' => $this->faker->randomFloat(2, 100, 9999.99),
            'total_value' => $this->faker->randomFloat(2, 100, 999999.99),
        ];
    }
}
