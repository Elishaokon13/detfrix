<?php

/*
 * This file is part of the Laravel Paystack package.
 *
 * (c) Prosper Otemuyiwa <prosperotemuyiwa@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return [

    /**
     * Public Key From Paystack Dashboard
     *
     */
    'publicKey' => getenv('pk_test_d19161cda2f8eff146280dd115b00c236a6184db'),

    /**
     * Secret Key From Paystack Dashboard
     *
     */
    'secretKey' => getenv('sk_test_09e73940575732bee621069fba2864f867fa5acf'),

    /**
     * Paystack Payment URL
     *
     */
    'paymentUrl' => getenv('https://api.paystack.co'),

    /**
     * Optional email address of the merchant
     *
     */
    'merchantEmail' => getenv('freecodingboy@gmail.com'),

];
