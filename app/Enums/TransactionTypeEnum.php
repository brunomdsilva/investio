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

    public static function toSelectArray(): array
    {
        return collect(self::cases())
            ->mapWithKeys(fn ($each, $key) => [
                $each => self::getLabel($each->value),
            ])
            ->toArray();
    }
}
