<?php

namespace App\Http\Controllers;

use App\Models\Deposit;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Unicodeveloper\Paystack\Facades\Paystack;

class PaymentController extends Controller
{
    public function redirectToGateway()
    {
        try{
            return Paystack::getAuthorizationUrl()->redirectNow();
        }catch(\Exception $e) {
            $response = ["message" => "The paystack token has expired. Please refresh the page and try again.', 'type'=>'error'"];
            return response($response, 422);
        }        
    }

    public function handleGatewayCallback()
    {
        $user = User::where('id','=',Auth::id());
        $paymentDetails = Paystack::getPaymentData();
        $amount = $paymentDetails['data']['amount'];
        $status = $paymentDetails['data']['status'];
        
        if($status == "success"){
            Deposit::create(['userid'=>Auth::id(), 'amount'=>$amount]);
        }
        $response = ["message" => "Payment was Successful"];
        return response($response, 200);
    }



}
