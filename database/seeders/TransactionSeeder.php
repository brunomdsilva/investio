<?php

namespace Database\Seeders;

use App\Actions\StoreTransaction;
use App\Data\TransactionRequestData;
use App\Enums\TransactionTypeEnum;
use App\Models\Asset;
use App\Models\User;
use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
{
    public function run(): void
    {
        $assets = Asset::all();
        $user = User::first();

        for ($i = 0; $i < 6; $i++) {
            StoreTransaction::run(TransactionRequestData::from([
                'user_id' => $user->id,
                'asset_id' => $assets->random()->id,
                'type' => TransactionTypeEnum::Buy,
                'quantity' => random_int(5, 20),
            ]));
        }

        for ($i = 0; $i < 80; $i++) {
            $asset = $assets->random();
            $quantity = random_int(1, 20);
            $type = random_int(0, 1) ? TransactionTypeEnum::Buy : TransactionTypeEnum::Sell;

            if ($type === TransactionTypeEnum::Sell) {
                $holding = $user->holdings()->firstWhere('asset_id', $asset->id);

                if ($holding && $holding->owned_quantity >= 1) {
                    $ownedQuantity = $holding->owned_quantity;
                    $quantity = random_int(1, $ownedQuantity);
                } else {
                    $type = TransactionTypeEnum::Buy;
                }
            }

            StoreTransaction::run(TransactionRequestData::from([
                'user_id' => $user->id,
                'asset_id' => $asset->id,
                'type' => $type,
                'quantity' => $quantity,
            ]));
        }
    }
}
