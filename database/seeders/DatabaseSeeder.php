<?php

namespace Database\Seeders;

use App\Actions\CreateTransactionAction;
use App\Data\CreateTransactionData;
use App\Enums\TransactionTypeEnum;
use App\Models\Investment;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin'),
        ]);

        $investments = Investment::factory(10)->create();

        for ($i = 0; $i < 20; $i++) {
            CreateTransactionAction::run(CreateTransactionData::from([
                'user_id' => $user->id,
                'investment_id' => $investments->random()->id,
                'type' => TransactionTypeEnum::Buy,
                'quantity' => random_int(1, 20),
            ]));
        }

        $userInvestments = $user->ownedInvestments()->get();

        for ($i = 0; $i < 12; $i++) {
            $userInvestment = $userInvestments->random()->first();

            CreateTransactionAction::run(CreateTransactionData::from([
                'user_id' => $user->id,
                'investment_id' => $userInvestment->investment_id,
                'type' => TransactionTypeEnum::Sell,
                'quantity' => random_int(1, $userInvestment->owned_quantity),
            ]));
        }
    }
}
