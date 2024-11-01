<?php

namespace App\Enums;

enum InvestmentTypeEnum: string
{
    case Crypto = 'crypto';
    case Stock = 'stock';
    case RealEstate = 'real_estate';
    case Bond = 'bond';

    public static function getLabel(string $value): string
    {
        return match ($value) {
            self::Crypto => 'Crypto',
            self::Stock => 'Stock',
            self::RealEstate => 'Real Estate',
            self::Bond => 'Bond',
        };
    }
}
