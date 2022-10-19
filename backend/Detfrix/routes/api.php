<?php

use App\Http\Controllers\AuthenciationController;
use App\Http\Controllers\BankController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\WithdrawalController;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', [AuthenciationController::class,'login'])->name('login');
    Route::post('/register',[AuthenciationController::class,'register'])->name('register');


}); 

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthenciationController::class,'logout'])->name('logout');
    Route::post('/packageCreate',[PackageController::class,'packageCreate'])->middleware('api.admin');
    Route::put('/packageUpdate',[PackageController::class,'packageUpdate'])->middleware('api.admin');
    Route::get('/packageId/{id}',[PackageController::class,'packageId'])->middleware('api.admin');
    Route::post('/packageDelete',[PackageController::class,'packageDelete'])->middleware('api.admin');
    Route::get('/packageAll',[PackageController::class,'packageAll'])->middleware('api.admin');



    Route::post('/BankCreate',[BankController::class,'BankCreate']);
    Route::post('/BankUpdate',[BankController::class,'BankUpdate']);
    Route::get('/BankDetailsId/{id}',[BankController::class,'BankDetailsId']);
    Route::get('/BankDetailsAll',[BankController::class,'BankDetailsAll']);
    Route::post('/withdrawal',[WithdrawalController::class,'Withdrawal'])->name('Withdrawal');
    Route::post('/depositCreate',[DepositController::class,'depositCreate'])->name('depositCreate');

});
