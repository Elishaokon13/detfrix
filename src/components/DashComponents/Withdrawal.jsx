import React, { useState } from "react";
import { FaArrowCircleDown, FaDollarSign } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Bank from "./Bank";
import Bottomnav from "./Bottomnav";
import Usdt from "./Usdt";

function Withdrawal() {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    return (
        <div className="font-roboto">

            <section>
                <section className='w-full h-full  lg:px-16 py-6 p-0'>

                    <div className="lg:gap-3 mt-3 h-2/3 pb-10">
                        <p className="mx-2 font-semibold text-xl lg:pb-6 lg:px-0 px-10">Select withdrawal method</p>

                        <div className="py-3 mt-3 h-full lg:bg-gray-200 bg-white pb-10 rounded-lg lg:w-full" >
                            <div className=" h-full px-5 gap-5">
                                <div className="w-full" onClick={() => setModal1(!modal1)}>
                                    <div className="flex items-center gap-4 px-5 py-2 rounded-sm bg-white w-full mb-2 hover:bg-gray-50 lg:border-0 border-[0.1px] border-gray-200" >
                                        <FaArrowCircleDown className="w-6 h-8 text-green-500" />
                                        <div className="w-1/2">
                                            <p className="text-lg font-bold">USDT</p>
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

                                <div className="w-full" onClick={() => setModal2(!modal2)}>
                                    <div className="flex items-center gap-4 px-5 py-2 mt-8 rounded-sm bg-white w-full mb-2 hover:bg-gray-50 lg:border-0 border-[0.1px] border-gray-200" >
                                        <FaDollarSign className="w-6 h-8 text-green-500" />
                                        <div className="w-1/2">
                                            <p className="text-lg font-bold">BANK WITHDRAWAL</p>
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
                    {modal2 ?
                        <Bank />
                        :
                        <p></p>

                    }
                </section>
            </section>

        </div>
    )
}
export default Withdrawal;