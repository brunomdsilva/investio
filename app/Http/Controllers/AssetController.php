<?php

namespace App\Http\Controllers;

use App\Data\AssetResourceData;
use App\Models\Asset;
use Inertia\Inertia;

class AssetController extends Controller
{
    public function index()
    {
        return Inertia::render('Assets/Index', [
            'assets' => AssetResourceData::collect(Asset::paginate(20)),
        ]);
    }
}
