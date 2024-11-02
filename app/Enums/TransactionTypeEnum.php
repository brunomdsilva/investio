<?php

namespace App\Enums;

enum TransactionTypeEnum: string
{
    case Buy = 'buy';
    case Sell = 'sell';

    public function getLabel(): string
    {
        return match ($this) {
            self::Buy => 'Buy',
            self::Sell => 'Sell',
        };
    }
}
