<?php

namespace App\Http\Controllers;

use App\Models\Holding;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $user = Auth::user();

        $totalHoldings = Holding::where('user_id', $user->id)
            ->where('owned_quantity', '>', 0)
            ->count();

        $totalHoldingsValue = Holding::where('user_id', $user->id)
            ->with('asset')
            ->get()
            ->sum(function ($holding) {
                return $holding->owned_quantity * $holding->asset->current_value;
            });

        $transactionsThisMonth = Transaction::where('user_id', $user->id)
            ->where('created_at', '>=', now()->startOfMonth())
            ->count();

        return Inertia::render('Dashboard/Index', [
            'totalHoldings' => $totalHoldings,
            'totalHoldingsValue' => $totalHoldingsValue,
            'transactionsThisMonth' => $transactionsThisMonth,
        ]);
    }
}
