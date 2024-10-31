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
        return Inertia::render('Transactions/Index', [
            'transactions' => TransactionData::collect(
                Transaction::with('investment')->paginate(8)
            ),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }
}
