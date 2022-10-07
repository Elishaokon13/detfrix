<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankDetails extends Model
{
    use HasFactory;
    protected $table = 'bankdetails';
    protected $fillable = [
        'userid','bankname','accountname','accountnumber'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User','userid');
    }
}
