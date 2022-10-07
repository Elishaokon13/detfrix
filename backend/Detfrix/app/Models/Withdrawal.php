<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Withdrawal extends Model
{
    use HasFactory;
    protected $table = 'withdrawal';
    protected $fillable = [
        'userid','amount','isPending'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User','userid');
    }
}
