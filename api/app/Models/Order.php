<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'full_name',
        'shipping_address',
        'email',
        'phone_number',
        'cin',
    ];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
