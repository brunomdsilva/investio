<?php

namespace App\Enums;

use Termwind\Enums\Color;

enum AssetTypeEnum: string
{
    case Crypto = 'crypto';
    case Stock = 'stock';
    case RealEstate = 'real_estate';
    case Bond = 'bond';

    public function getLabel(): string
    {
        return match ($this) {
            self::Crypto => 'Crypto',
            self::Stock => 'Stock',
            self::RealEstate => 'Real Estate',
            self::Bond => 'Bond',
        };
    }

    public function getColor(): string
    {
        return match ($this) {
            self::Crypto => Color::SKY_500,
            self::Stock => Color::TEAL_600,
            self::RealEstate => Color::ORANGE_500,
            self::Bond => Color::PINK_500,
        };
    }
}
