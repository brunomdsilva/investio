<?php

namespace App\Enums;

enum InvestmentTypeEnum: string
{
    case Crypto = 'crypto';
    case Stock = 'stock';
    case RealEstate = 'real_estate';
    case Bond = 'bond';
}
