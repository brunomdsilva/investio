<?php

namespace App\Enums;

enum AssetTypeEnum: string
{
    case Crypto = 'crypto';
    case Stock = 'stock';
    case RealEstate = 'real_estate';
    case Bond = 'bond';

    public static function labels(): array
    {
        return [
            self::Crypto->value => 'Crypto',
            self::Stock->value => 'Stock',
            self::RealEstate->value => 'Real Estate',
            self::Bond->value => 'Bond',
        ];
    }

    public function getLabel(): string
    {
        return $this->labels()[$this->value];
    }
}
