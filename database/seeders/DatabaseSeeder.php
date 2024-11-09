<?php

namespace Database\Seeders;

use App\Enums\AssetTypeEnum;
use App\Models\Asset;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin'),
        ]);

        collect(AssetTypeEnum::cases())->each(function (AssetTypeEnum $type) {
            Asset::factory(random_int(1, 3))->create([
                'type' => $type,
            ]);
        });

        $this->call([
            TransactionSeeder::class,
        ]);
    }
}
