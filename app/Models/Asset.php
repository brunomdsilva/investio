<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\LaravelOptions\Selectable;
use Spatie\LaravelOptions\SelectOption;

/**
 * @property int $id
 * @property string $name
 * @property string $ticker
 * @property float $current_value
 * @property string $type
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Asset extends Model implements Selectable
{
    use HasFactory;

    protected $guarded = [];

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    public function holdings(): HasMany
    {
        return $this->hasMany(Holding::class);
    }

    public function toSelectOption(): SelectOption
    {
        return new SelectOption(
            "{$this->name} ({$this->ticker})",
            $this->id
        );
    }
}
