<?php

namespace Database\Seeders;

use App\Actions\CreateTransactionAction;
use App\Data\CreateTransactionData;
use App\Enums\TransactionTypeEnum;
use App\Models\Asset;
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

        $assets = Asset::factory(10)->create();

        for ($i = 0; $i < 60; $i++) {
            CreateTransactionAction::run(CreateTransactionData::from([
                'user_id' => $user->id,
                'asset_id' => $assets->random()->id,
                'type' => TransactionTypeEnum::Buy,
                'quantity' => random_int(1, 20),
            ]));
        }

        $holdings = $user->ownedAssets()->get();

        for ($i = 0; $i < 30; $i++) {
            $holding = $holdings->random()->first();

            CreateTransactionAction::run(CreateTransactionData::from([
                'user_id' => $user->id,
                'asset_id' => $holding->asset_id,
                'type' => TransactionTypeEnum::Sell,
                'quantity' => random_int(1, $holding->owned_quantity),
            ]));
        }
    }
}
