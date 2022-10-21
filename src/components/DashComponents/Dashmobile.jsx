import React, { useState } from "react";
import ReferralBox from "./ReferralBox";
import Bottomnav from "./Bottomnav";

function Dashmobile() {

    const [balance, setbalance] = useState(true);
    const [profit, setprofit] = useState(false);
    const [referral, setreferral] = useState(false);
    return (
        <div>
            <section className='w-full h-full  px-8 pb-20 py-6'>
                <div className="flex gap-3 pb-7">
                    <div onClick={() => [setbalance(!balance), setprofit(false), setreferral(false)]}  className={`${balance ? 'bg-blue-800 text-white' : 'bg-blue-100 text-black'} w-1/3 border-2 rounded-lg`}>
                        <div className='w-full  text-center  rounded-t-md'>
                            <p className='text-md font-semibold'>Balance</p>
                        </div>
                    </div>
                    <div onClick={() => [setprofit(!profit), setbalance(false), setreferral(false)]}  className={`${profit ? 'bg-blue-800 text-white' : 'bg-blue-100 text-black'} w-1/3 border-2 rounded-lg`}>
                        <div className='w-full  text-center  rounded-t-md'>
                            <p className='text-md font-semibold'>Profit</p>
                        </div>
                    </div>
                    <div onClick={() => [setreferral(!referral), setbalance(false), setprofit(false)]} className={`${referral ? 'bg-blue-800 text-white' : 'bg-blue-100 text-black'} w-1/3 border-2 rounded-lg`}>
                        <div className='w-full text-center  rounded-t-md'>
                            <p className='text-md font-semibold'>Referral</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    {
                        balance ? 
                        <div className='bg-blue-300 w-full border-2 border-blue-500 rounded-lg h-44'>
                            <div className='w-full bg-gray-100 text-center  rounded-t-md'>
                                <p className='p-10 text-4xl font-medium'>$1200.00</p>
                                <p className='pb-3 text-md font-semibold'>Available Balance</p>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    
                    {
                        profit ?  
                        <div className='bg-blue-300 w-full border-2 border-blue-500 rounded-lg h-44'>
                            <div className='w-full bg-gray-100 text-center  rounded-t-md'>
                                <p className='p-10 text-4xl font-medium'>$1200.00</p>
                                <p className='pb-3 text-md font-semibold'>Available Profit</p>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    {
                        referral ?
                        <div className='bg-blue-300 w-full border-2 border-blue-500 rounded-lg h-44'>
                            <div className='w-full bg-gray-100 text-center  rounded-t-md'>
                                <p className='p-10 text-4xl font-medium'>$1200.00</p>
                                <p className='pb-3 text-md font-semibold'>Referral Earnings</p>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                </div>
                {/* second section */}
                <div className="lg:flex lg:gap-3 mt-3 h-2/3 pb-10">
                    {
                        profit ?
                            <div className="py-3 mt-3 h-full rounded-lg w-full" >
                            <div className="flex h-full gap-5">
                                
                                <div className="h-full w-full">
                                
                                <div className="flex gap-4 px-5 py-2 border-[0.1px] border-gray-200 rounded-sm bg-white w-full mb-2">
                                    <p className="">ip</p>
                                    <div className="w-1/2">
                                        <p>Deposit</p>
                                        <p>8 oct 2021</p>
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-end">+$234.34</p>
                                        <p className="text-end">0.0.0010351 BTC</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 px-5 py-2 border-[0.1px] border-gray-200 rounded-sm bg-white w-full mb-2">
                                    <p className="">ip</p>
                                    <div className="w-1/2">
                                        <p>Deposit</p>
                                        <p>8 oct 2021</p>
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-end">+$234.34</p>
                                        <p className="text-end">0.0.0010351 BTC</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 px-5 py-2 border-[0.1px] border-gray-200 rounded-sm bg-white w-full mb-2">
                                    <p className="">ip</p>
                                    <div className="w-1/2">
                                        <p>Deposit</p>
                                        <p>8 oct 2021</p>
                                    </div>
                                    <div className="w-1/2">
                                        <p className="text-end">+$234.34</p>
                                        <p className="text-end">0.0.0010351 BTC</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        :
                            <div></div>
                    }
                    
                    {
                        referral ?
                            <div className="py-3 mt-3 h-full rounded-lg lg:w-[32.5%]">
                            <div className="h-full  gap-5">
                                <div className="w-full">
                                    <div className="w-full">
                                        <ReferralBox/>
                                    </div>
                                    <div className=" gap-4 px-2 rounded-md bg-white border-[0.1px] border-gray-200 w-full pb-5 mt-5">
                                    <p className="font-medium pt-2 text-lg">Referrals</p>
                                    <div className="flex items-center gap-4 py-2 border-b-2 border-gray-300 w-full">
                                        <p className="">ip</p>
                                        <div className="w-1/2">
                                            <p className="font-semibold">Amos Cient</p>
                                            <p className="text-sm">cient123</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end text-sm font-semibold">Aug 24</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 py-2 border-b-2 border-gray-300 w-full">
                                        <p className="">ip</p>
                                        <div className="w-1/2">
                                            <p className="font-semibold">Amos Cient</p>
                                            <p className="text-sm">cient123</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end text-sm font-semibold">Aug 24</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 py-2 border-b-2 border-gray-300 w-full">
                                        <p className="">ip</p>
                                        <div className="w-1/2">
                                            <p className="font-semibold">Amos Cient</p>
                                            <p className="text-sm">cient123</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end text-sm font-semibold">Aug 24</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 py-2 w-full">
                                        <p className="">ip</p>
                                        <div className="w-1/2">
                                            <p className="font-semibold">Amos Cient</p>
                                            <p className="text-sm">cient123</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end text-sm font-semibold">Aug 24</p>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>
                            </div>
                            </div>
                        :
                            <div></div>
                    }
                    
                </div>
            </section>
            <section>
                <Bottomnav/>
            </section>
        </div>
    )
}
export default Dashmobile;