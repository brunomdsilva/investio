<?php

namespace App\Actions;

use App\Data\TransactionRequestData;
use App\Enums\TransactionTypeEnum;
use App\Models\Asset;
use App\Models\Holding;
use App\Models\Transaction;
use Illuminate\Support\Facades\DB;
use Lorisleiva\Actions\Concerns\AsAction;

class StoreTransaction
{
    use AsAction;

    public function handle(TransactionRequestData $data): Transaction
    {
        return DB::transaction(function () use ($data): Transaction {
            return match ($data->type) {
                TransactionTypeEnum::Buy => $this->handleBuy($data),
                TransactionTypeEnum::Sell => $this->handleSell($data),
            };
        });
    }

    private function handleBuy(TransactionRequestData $data): Transaction
    {
        $transaction = $this->storeTransaction($data);

        $holding = Holding::query()
            ->firstOrCreate([
                'user_id' => $data->user_id,
                'asset_id' => $data->asset_id,
            ]);

        $holding->increment('owned_quantity', $data->quantity);

        return $transaction;
    }

    private function handleSell(TransactionRequestData $data)
    {
        $holding = Holding::query()
            ->where('user_id', $data->user_id)
            ->where('asset_id', $data->asset_id)
            ->first();

        if (! $holding || $holding->owned_quantity < $data->quantity) {
            throw new \Exception('User does not have enough quantity to sell');
        }

        $transaction = $this->storeTransaction($data);

        $holding->decrement('owned_quantity', $data->quantity);

        if ($holding->owned_quantity === 0) {
            $holding->delete();
        }

        return $transaction;
    }

    private function storeTransaction(TransactionRequestData $data): Transaction
    {
        $asset = Asset::findOrFail($data->asset_id);

        return Transaction::factory()->create([
            'user_id' => $data->user_id,
            'asset_id' => $asset->id,
            'type' => $data->type,
            'quantity' => $data->quantity,
            'unit_value' => $asset->current_value,
            'total_value' => $asset->current_value * $data->quantity,
        ]);
    }
}
