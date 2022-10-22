import React from "react";
import ReferralBox from "./ReferralBox";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import Bottomnav from "./Bottomnav";
import Dashmobile from "./Dashmobile";

function Dashboard() {

    return (
        <div>

            <section className="lg:block hidden">
                <section className='w-full h-full  px-8 py-6'>
                    <div className="flex gap-3">
                        <div className='bg-blue-300 w-1/3 border-2 border-blue-500 rounded-lg h-44'>
                            <div className='w-full bg-gray-100 text-center  rounded-t-md'>
                                <p className='p-10 text-4xl font-medium'>$1200.00</p>
                                <p className='pb-3 text-md font-semibold'>Available Balance</p>
                            </div>
                        </div>
                        <div className='bg-blue-300 w-1/3 border-2 border-blue-500 rounded-lg h-44'>
                            <div className='w-full bg-gray-100 text-center  rounded-t-md'>
                                <p className='p-10 text-4xl font-medium'>$1200.00</p>
                                <p className='pb-3 text-md font-semibold'>Available Profit</p>
                            </div>
                        </div>
                        <div className='bg-blue-300 w-1/3 border-2 border-blue-500 rounded-lg h-44'>
                            <div className='w-full bg-gray-100 text-center  rounded-t-md'>
                                <p className='p-10 text-4xl font-medium'>$1200.00</p>
                                <p className='pb-3 text-md font-semibold'>Referral Earnings</p>
                            </div>
                        </div>
                    </div>
                    {/* second section */}
                    <div className="lg:flex lg:gap-3 mt-3 h-2/3 pb-10">
                        <div className="py-3 mt-3 h-full bg-gray-200 pb-10 rounded-lg lg:w-[67.5%]" >
                            <p className="mx-2 font-semibold text-lg pb-6">Activity</p>
                            <div className="flex h-full px-5 gap-5">
                                <div className="w-1/2">
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                                        <FaArrowCircleDown className="w-6 h-5 text-green-500" />
                                        <div className="w-1/2">
                                            <p>Deposit</p>
                                            <p>8 oct 2021</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end">+$234.34</p>
                                            <p className="text-end">0.0.0010351 BTC</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                                        <FaArrowCircleUp className="w-6 h-5 text-red-500" />

                                        <div className="w-1/2">
                                            <p>Deposit</p>
                                            <p>8 oct 2021</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end">+$234.34</p>
                                            <p className="text-end">0.0.0010351 BTC</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                                        <FaArrowCircleDown className="w-6 h-5 text-green-500" />

                                        <div className="w-1/2">
                                            <p>Deposit</p>
                                            <p>8 oct 2021</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end">+$234.34</p>
                                            <p className="text-end">0.0.0010351 BTC</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                                        <FaArrowCircleUp className="w-6 h-5 text-red-500" />

                                        <div className="w-1/2">
                                            <p>Deposit</p>
                                            <p>8 oct 2021</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end">+$234.34</p>
                                            <p className="text-end">0.0.0010351 BTC</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                                        <FaArrowCircleUp className="w-6 h-5 text-red-500" />

                                        <div className="w-1/2">
                                            <p>Deposit</p>
                                            <p>8 oct 2021</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end">+$234.34</p>
                                            <p className="text-end">0.0.0010351 BTC</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full">
                                        <FaArrowCircleUp className="w-6 h-5 text-red-500" />

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
                                <div className="h-full w-1/2">
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                                        <FaArrowCircleDown className="w-6 h-5 text-green-500" />

                                        <div className="w-1/2">
                                            <p>Deposit</p>
                                            <p>8 oct 2021</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end">+$234.34</p>
                                            <p className="text-end">0.0.0010351 BTC</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                                        <FaArrowCircleDown className="w-6 h-5 text-green-500" />

                                        <div className="w-1/2">
                                            <p>Deposit</p>
                                            <p>8 oct 2021</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end">+$234.34</p>
                                            <p className="text-end">0.0.0010351 BTC</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
                                        <FaArrowCircleDown className="w-6 h-5 text-green-500" />

                                        <div className="w-1/2">
                                            <p>Deposit</p>
                                            <p>8 oct 2021</p>
                                        </div>
                                        <div className="w-1/2">
                                            <p className="text-end">+$234.34</p>
                                            <p className="text-end">0.0.0010351 BTC</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
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
                                    <div className="flex gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2">
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
                        <div className="py-3 mt-3 h-full bg-gray-200 rounded-lg lg:w-[32.5%]">
                            <div className="h-full px-5 gap-5">
                                <div className="w-full">

                                    <div className="w-full">
                                        <ReferralBox />
                                    </div>
                                    <div className=" gap-4 px-2 rounded-md bg-white w-full pb-5 mt-5">
                                        <p className="font-medium pt-2 text-lg">Referrals</p>
                                        <div className="flex items-center gap-4 py-2 border-b-[1px] border-gray-300 w-full">
                                            <p className="">ip</p>
                                            <div className="w-1/2">
                                                <p className="font-semibold">Amos Cient</p>
                                                <p className="text-sm">cient123</p>
                                            </div>
                                            <div className="w-1/2">
                                                <p className="text-end text-sm font-semibold">Aug 24</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 py-2 border-b-[1px] border-gray-300 w-full">
                                            <p className="">ip</p>
                                            <div className="w-1/2">
                                                <p className="font-semibold">Amos Cient</p>
                                                <p className="text-sm">cient123</p>
                                            </div>
                                            <div className="w-1/2">
                                                <p className="text-end text-sm font-semibold">Aug 24</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 py-2 border-b-[1px] border-gray-300 w-full">
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

                    </div>
                </section>
                <section>
                    <Bottomnav />
                </section>
            </section>
            <section className="lg:hidden block">
                <Dashmobile />
            </section>
        </div>
    )
}
export default Dashboard;