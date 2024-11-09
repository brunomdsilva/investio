<?php

namespace App\Http\Controllers;

use App\Data\HoldingsResourceData;
use App\Models\Holding;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HoldingController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->user()->id;

        return Inertia::render('Holdings/Index', [
            'holdings' => HoldingsResourceData::collect(
                Holding::where('user_id', $userId)
                    ->with('asset')
                    ->paginate(10)
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

    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
