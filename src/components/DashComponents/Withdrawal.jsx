import React, { useState } from "react";
import ReferralBox from "./ReferralBox";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Bottomnav from "./Bottomnav";
import Dashmobile from "./Dashmobile";
import Usdt from "./Usdt";

function Withdrawal() {
    const [modal1, setModal1] = useState(false);
    return (
        <div>

            <section>
                <section className='w-full h-full  lg:px-8 lg:py-6 p-0'>

                    <div className="lg:gap-3 mt-3 h-2/3 pb-10">
                        <p className="mx-2 font-semibold text-lg pb-6">Select withdrawal method</p>

                        <div className="py-3 mt-3 h-full lg:bg-gray-200 bg-white pb-10 rounded-lg lg:w-full" >
                            <div className=" h-full px-5 gap-5">
                                <div className="w-full" onClick={() => setModal1(!modal1)}>
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2 hover:bg-gray-50 lg:border-0 border-[0.1px] border-gray-200" >
                                        <FaArrowCircleDown className="w-6 h-5 text-green-500" />
                                        <div className="w-1/2">
                                            <p>USDT</p>
                                            <ul className="flex flex-row gap-2 text-sm">
                                                <li>
                                                    <p>$57.155.40</p>
                                                </li>
                                                <li className="text-green-500">
                                                    <p>+2.34%</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="w-1/2 flex justify-end">
                                            <FaArrowRight className="h-5 w-5" />
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
                <section>
                    {modal1 ?
                        <Usdt />
                        :
                        <p></p>
                    }
                </section>
            </section>

        </div>
    )
}
export default Withdrawal;