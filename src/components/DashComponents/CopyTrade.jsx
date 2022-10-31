import React, { useState } from "react";
import { FcSettings } from "react-icons/fc";
import Bottomnav from "./Bottomnav";
import CopyTradePayment from "./CopyTradePayment";


export default function CopyTrade() {
    const [modal1, setModal1] = useState(false);

  return (
    <div className="flex flex-col font-[roboto] items-center justify-center w-full h-full">

      <section className='w-full h-full  lg:px-16 lg:py-6 p-0'>
                    <div className="lg:gap-3 mt-3 h-2/3 pb-10">
                        <p className="mx-2 font-semibold text-2xl pb-6">Copy Trade</p>

                        <div className="lg:py-11 lg:px-16 mt-3 h-full lg:bg-gray-200 bg-white rounded-lg lg:w-full" >
                            <div className=" h-full px-5 gap-5">
                                <div className="w-full flex justify-center gap-20">
                                    <div className="items-center px-5 py-2 rounded-lg bg-white w-full lg:border-0 border-[0.1px] border-gray-200 text-center" >
                                        {/* <FaArrowCircleDown className="w-6 h-5 text-green-500" /> */}
                                        <div className="w-full lg:px-48 lg:py-7">
                                        <label className="lg:text-base text-sm">Link your MT4 to our trade replicating server for weekly profit of $1000</label>
                                            <form className="flex flex-col text-start px-6">
                                                <label className="pt-7">MT4 Account ID</label>
                                                <input className="border border-gray-400 rounded-sm mb-4 px-3 h-8 focus:outline-none selection:bg-transparent" type={Text}/>
                                                <label>Broker</label>
                                                <select className="border border-gray-400 rounded-sm mb-4 px-3 h-8 focus:outline-none selection:bg-transparent focus:border-gray-400">
                                                    <option value={'KOT4X'}>KOT4X</option>
                                                    <option value={"HUGO'S WAY"}>HUGO'S WAY</option>
                                                </select>
                                                <label>MT4 Equity/Balance</label>
                                                <input className="border border-gray-400 rounded-sm mb-4 px-3 h-8 focus:outline-none selection:bg-transparent" type={Text} placeholder="$2000 above"/>
                                                <label>MT4 Password</label>
                                                <input className="border border-gray-400 rounded-sm mb-7 px-3 h-8 focus:outline-none selection:bg-transparent" type={Text} placeholder="*******"/>
                                                <p className="bg-blue-500 text-white text-center w-1/2 m-auto rounded-sm py-1 cursor-pointer" onClick={() => setModal1(!modal1)}>Proceed</p>
                                            </form>
                                        </div>
                                        <div className="w-1/2 flex justify-end">
                                            {/* <FaArrowRight className="h-5 w-5" /> */}
                                        </div>
                                    </div>

                                    


                                </div>

                            </div>
                        </div>


                    </div>
                </section>
                <section className="w-full">
                    <Bottomnav />
                </section>
                <section>
                    {modal1 ?
                        <CopyTradePayment/>
                        :
                        <p></p>
                    }
                </section>
    </div>
  );
}