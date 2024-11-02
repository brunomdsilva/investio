<?php

namespace App\Http\Controllers;

use App\Data\TransactionData;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = TransactionData::collect(Transaction::with('asset')->paginate(8));

        return Inertia::render('Transactions/Index', [
            'transactions' => $transactions,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request) {}
}
