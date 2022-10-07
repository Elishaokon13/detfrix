<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PackageController extends Controller
{
    public function packageCreate(Request $request)
    {
        $validate = Validator::make($request->all(),[
            'packagename'=>'required|string',
            'duration'=> 'required|string',
            'profit'=>'required|string',
            'investment'=>'required'
        ]);
        if ($validate->fails())
        {
            return response(['errors'=>$validate->errors()->all()], 422);
        }
        $package = new Package();
        $package['packagename'] = $request['packagename'];
        $package['duration'] = $request['duration'];
        $package['profit'] = $request['profit'];
        $package['investment'] = $request['investment'];
        $package->save();
        $response = ["message" => "Package Saved"];
        return response($response, 200);
    }

    public function packageUpdate(Package $package,Request $request)
    {
        $validate = Validator::make($request->all(),[
            'packagename'=>'required|string',
            'duration'=> 'required|string',
            'profit'=>'required|string',
            'investment'=>'required'
        ]);

        if ($validate->fails())
        {
            return response(['errors'=>$validate->errors()->all()], 422);
        }

        $package['packagename'] = $request['packagename'];
        $package['duration'] = $request['duration'];
        $package['profit'] = $request['profit'];
        $package['investment'] = $request['investment'];
        $package->save();
        $response = ["message" => "Package Updated"];
        return response($response, 200);

    }

    public function packageId($id)
    {
        $package = Package::find($id);
        if(is_null($package))
        {
            return response('package id does not exist');
        }
        $response = ["message" => "Package retrieved successfully."];
        return response($response, 200);
    }

    public function packageAll()
    {
        $package = Package::all();
        if(is_null($package))
        {
            return response('package id does not exist');
        }
        $response = ["message" => "Package retrieved successfully."];
        return response($response, 200);
    }

    public function packageDelete(Package $package)
    {
        $package->delete();
        $response = ["message" => "Package Deleted successfully."];
        return response($response, 200);
    }
}
