<?php

namespace App\Enums;

enum TransactionTypeEnum: string
{
    case Buy = 'buy';
    case Sell = 'sell';

    public static function labels(): array
    {
        return [
            self::Buy->value => 'Buy',
            self::Sell->value => 'Sell',
        ];
    }

    public function getLabel(): string
    {
        return $this->labels()[$this->value];
    }
}
