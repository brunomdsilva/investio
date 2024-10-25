<?php

namespace App\Support;

class Toast
{
    public static function success(string $message, ?string $description = null): array
    {
        return [
            'message' => $message,
            'description' => $description,
            'type' => 'success',
        ];
    }

    public static function error(string $message, ?string $description = null): array
    {
        return [
            'message' => $message,
            'description' => $description,
            'type' => 'error',
        ];
    }

    public static function warning(string $message, ?string $description = null): array
    {
        return [
            'message' => $message,
            'description' => $description,
            'type' => 'warning',
        ];
    }

    public static function default(string $message, ?string $description = null): array
    {
        return [
            'message' => $message,
            'description' => $description,
            'type' => 'default',
        ];
    }
}
