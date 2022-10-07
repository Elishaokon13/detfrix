<?php

namespace App\Http\Controllers;

use App\Models\BankDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BankController extends Controller
{
    public function BankCreate(Request $request)
    {
        $validators = Validator::make($request->all(),[
            'bankname'=>'required|string',
            'accountname'=>'required|string',
            'accountnumber'=>'required|string'
        ]);

        if ($validators->fails())
        {
            return response(['errors'=>$validators->errors()->all()], 422);
        }


        $bank = BankDetails::create($request->toArray());
        $bank->save();
        $response = ["message" => "Bank details saved"];
        return response($response, 201);


    }

    public function BankUpdate(BankDetails $bankDetails, Request $request)
    {
        $validators = Validator::make($request->all(),[
            'bankname'=>'required|string',
            'accountname'=>'required|string',
            'accountnumber'=>'required|string'
        ]);

        if ($validators->fails())
        {
            return response(['errors'=>$validators->errors()->all()], 422);
        }

        $bankDetails['bankname'] = $request['bankname'];
        $bankDetails['accountname'] = $request['accountname'];
        $bankDetails['accountnumber'] = $request['accountnumber'];
        $response = ["message" => "BankDetails Updated"];
        return response($response, 200);

    }

    public function BankDetailsId($id)
    {
        $bankDetails = BankDetails::find($id);
        if(is_null($bankDetails))
        {
            return response('bank details id does not exist');
        }
        $response = ["message" => "bank details retrieved successfully."];
        return response($response, 200);
    }

    
}
