<?php

namespace App\Enums;

enum TransactionTypeEnum: string
{
    case Buy = 'buy';
    case Sell = 'sell';

    public static function getLabel(string $value): string
    {
        return match ($value) {
            self::Buy => 'Buy',
            self::Sell => 'Sell',
        };
    }
}
