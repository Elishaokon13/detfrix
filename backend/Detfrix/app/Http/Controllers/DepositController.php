<?php

namespace App\Http\Controllers;

use App\Models\Deposit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class DepositController extends Controller
{
    public function depositCreate(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'amount'=>'required',
            'paymentMethod'=>'required',
            'upload'=>'required',
            'upload.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        if($validator->fails()){
            return response(['errors'=>$validator->errors()->all()],422);
        }

        $deposit = new Deposit();
        $deposit['userid'] = Auth::id();
        $deposit['amount'] = $request['amount'];
        $deposit['paymentMethod'] = $request['paymentMethod'];
        $images = array();

        if ($files = $request->file('upload')) {

            foreach ($files as $file) {
                $path = Cloudinary::uploadApi()->upload($file);
                array_push($images, $path);  
            }
        }
        $deposit['upload'] = json_encode($images);  
        $deposit->save();
        $response = ["message" => "Deposit Saved"];
        return response($response, 200);
    }

    public function DepositgetAll()
    {
        $deposit = Deposit::all();
        if(is_null($deposit))
        {
            return response('package id does not exist');
        }
        $response = ["message" => "Package retrieved successfully."];
        return response($response, 200);
    }

    public function DepositById($id)
    {
        $deposit = Deposit::find($id);
        if(is_null($deposit))
        {
            return response('package id does not exist');
        }
        $response = ["message" => "Package retrieved successfully."];
        return response($response, 200);
    }
}
