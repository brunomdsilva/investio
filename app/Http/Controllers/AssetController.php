<?php

namespace App\Http\Controllers;

use App\Data\AssetResourceData;
use App\Models\Asset;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssetController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');

        $assets = Asset::query()
            ->when($search, function (Builder $query) use ($search) {
                return $query
                    ->where('name', 'like', "%$search%")
                    ->orWhere('ticker', 'like', "%$search%");
            })
            ->paginate(2)
            ->appends(['search' => $search]);

        return Inertia::render('Assets/Index', [
            'assets' => AssetResourceData::collect($assets),
            'search' => $search,
        ]);
    }
}
