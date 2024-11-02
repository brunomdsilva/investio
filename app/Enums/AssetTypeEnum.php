<?php

namespace App\Enums;

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
}
