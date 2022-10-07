<?php

namespace App\Http\Controllers;

use App\Models\Withdrawal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class WithdrawalController extends Controller
{
    public function Withdrawal(Request $request)
    {
        $validators = Validator::make($request->all(),[
            'amount'=>'required'
        ]);

        if ($validators->fails())
        {
            return response(['errors'=>$validators->errors()->all()], 422);
        }

        $withdraw = Withdrawal::create($request->toArray());
        $withdraw->save();

        $response = ["message" => "Withdrawal Request has been sent, await approval"];
        return response($response, 201);
    }
}
