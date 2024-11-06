<?php

namespace App\Http\Controllers;

use App\Actions\StoreTransaction;
use App\Data\TransactionRequestData;
use App\Data\TransactionResourceData;
use App\Models\Transaction;
use App\Support\Toast;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = TransactionResourceData::collect(
            Transaction::with('asset')
                ->orderBy('created_at', 'desc')
                ->paginate(8)
        );

        return Inertia::render('Transactions/Index', [
            'transactions' => $transactions,
        ]);
    }

    public function store(Request $request)
    {
        $data = TransactionRequestData::from($request->merge([
            'user_id' => $request->user()->id,
        ]));

        StoreTransaction::run($data);

        return back()->with('toast', Toast::success('Transaction created successfully.'));
    }
}
