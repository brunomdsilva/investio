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
    public function index(Request $request)
    {
        $search = $request->input('search');

        $transactions = Transaction::query()
            ->with('asset')
            ->when($search, function ($query) use ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('quantity', 'like', "%{$search}%")
                        ->orWhereHas('asset', function ($assetQuery) use ($search) {
                            $assetQuery->where('name', 'like', "%{$search}%")
                                ->orWhere('ticker', 'like', "%{$search}%");
                        });
                });
            })
            ->orderBy('created_at', 'desc')
            ->paginate(8)
            ->appends(['search' => $search]);

        return Inertia::render('Transactions/Index', [
            'transactions' => TransactionResourceData::collect($transactions),
            'search' => $search,
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
