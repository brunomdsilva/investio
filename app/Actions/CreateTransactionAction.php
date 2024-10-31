<?php

namespace App\Actions;

use App\Data\CreateTransactionData;
use App\Enums\TransactionTypeEnum;
use App\Models\Investment;
use App\Models\Transaction;
use App\Models\UserInvestment;
use Illuminate\Support\Facades\DB;
use Lorisleiva\Actions\Concerns\AsAction;

class CreateTransactionAction
{
    use AsAction;

    public function handle(CreateTransactionData $data): Transaction
    {
        return DB::transaction(function () use ($data): Transaction {
            return match ($data->type) {
                TransactionTypeEnum::Buy => $this->handleBuy($data),
                TransactionTypeEnum::Sell => $this->handleSell($data),
            };
        });
    }

    private function handleBuy(CreateTransactionData $data): Transaction
    {
        $transaction = $this->createTransaction($data);

        $userInvestment = UserInvestment::query()
            ->firstOrCreate([
                'user_id' => $data->user_id,
                'investment_id' => $data->investment_id,
            ]);

        $userInvestment->increment('owned_quantity', $data->quantity);

        return $transaction;
    }

    private function handleSell(CreateTransactionData $data)
    {
        $userInvestment = UserInvestment::query()
            ->where('user_id', $data->user_id)
            ->where('investment_id', $data->investment_id)
            ->first();

        if (! $userInvestment || $userInvestment->owned_quantity < $data->quantity) {
            throw new \Exception('User does not have enough quantity to sell');
        }

        $transaction = $this->createTransaction($data);

        $userInvestment->decrement('owned_quantity', $data->quantity);

        if ($userInvestment->owned_quantity === 0) {
            $userInvestment->delete();
        }

        return $transaction;
    }

    private function createTransaction(CreateTransactionData $data): Transaction
    {
        $investment = Investment::findOrFail($data->investment_id);

        return Transaction::factory()->create([
            'user_id' => $data->user_id,
            'investment_id' => $investment->id,
            'type' => $data->type,
            'quantity' => $data->quantity,
            'unit_value' => $investment->current_value,
            'total_value' => $investment->current_value * $data->quantity,
        ]);
    }
}
