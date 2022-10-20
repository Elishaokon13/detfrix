<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InvestmentController extends Controller
{
   public function InvestmentCreate(Request $request)
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


        

   }
}
