<?php

namespace App\Enums;

enum TransactionTypeEnum: string
{
    case Buy = 'buy';
    case Sell = 'sell';
}
