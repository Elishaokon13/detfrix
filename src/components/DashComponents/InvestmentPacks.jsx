import { useState } from "react";
import { FcSettings } from "react-icons/fc";
import { Link, useMatch, } from "react-router-dom";
import Bottomnav from "./Bottomnav";
import StarterPack from "./StarterPack";


export default function InvestmentPacks() {
    const [modal1, setModal1] = useState(false);

  return (
    <div className="flex flex-col font-[roboto] items-center justify-center w-full h-full">

      <section className='w-full h-full  lg:px-7 py-6 p-0'>

                    <div className="lg:gap-3 mt-3 h-2/3 pb-10">
                        <p className="mx-2 font-semibold text-xl lg:px-0 px-10 lg:pb-6">Investment packs</p>

                        <div className="py-11 px-8 mt-3 h-full lg:bg-gray-200 bg-white rounded-lg lg:w-full" >
                            <div className=" h-full px-5 gap-5">
                                <div className="w-full flex lg:flex-row flex-col justify-center lg:gap-5 gap-10">
                                    <div className="m-auto items-center py-2 rounded-2xl bg-white w-full lg:border-0 border-[0.1px] border-gray-200 text-center" >
                                        {/* <FaArrowCircleDown className="w-6 h-5 text-green-500" /> */}
                                        <div className="py-6 border-b-[1px] border-gray-400">
                                                <p className="text-lg font-semibold">Starter pack</p>
                                            
                                        </div>
                                        <div className="w-full">
                                            
                                            <ul className="text-sm px-10">
                                            
                                                <li className="py-8 text-blue-700 text-3xl font-semibold">
                                                    <p>10% Daily</p>
                                                </li>
                                                <li className="text-lg">
                                                    <p>- $1000 - $4,999</p>
                                                </li>
                                                <li className=" text-lg">
                                                    <p>- 24/7 Support</p>
                                                </li>
                                                <li className="text-lg">
                                                    <p>- 5% Referral Bonus</p>
                                                </li>
                                                <li className="py-5 w-full m-auto">
                                                    <p className=" py-2 bg-white rounded-sm border border-blue-400 text-blue-400 text-center cursor-pointer" onClick={() => setModal1(!modal1)}>Buy pack</p>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div className="m-auto items-center py-2 rounded-2xl bg-white w-full lg:border-0 border-[0.1px] border-gray-200 text-center" >
                                        {/* <FaArrowCircleDown className="w-6 h-5 text-green-500" /> */}
                                        <div className="py-6 border-b-[1px] border-gray-400">
                                                <p className="text-lg font-semibold">Standard pack</p>
                                            
                                        </div>
                                        <div className="w-full">
                                            
                                            <ul className="text-sm px-10">
                                            
                                                <li className="py-8 text-blue-700 text-3xl font-semibold">
                                                    <p>12% Daily</p>
                                                </li>
                                                <li className="text-lg">
                                                    <p>- $1000 - $4,999</p>
                                                </li>
                                                <li className=" text-lg">
                                                    <p>- 24/7 Support</p>
                                                </li>
                                                <li className="text-lg">
                                                    <p>- 5% Referral Bonus</p>
                                                </li>
                                                <li className="py-5 w-full m-auto">
                                                <p className=" py-2 bg-white rounded-sm border border-blue-400 text-blue-400 text-center cursor-pointer" onClick={() => setModal1(!modal1)}>Buy pack</p>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    <div className="m-auto items-center py-2 rounded-2xl bg-white w-full lg:border-0 border-[0.1px] border-gray-200 text-center" >
                                        {/* <FaArrowCircleDown className="w-6 h-5 text-green-500" /> */}
                                        <div className="py-6 border-b-[1px] border-gray-400">
                                                <p className="text-lg font-semibold">Premium pack</p>
                                            
                                        </div>
                                        <div className="w-full">
                                            
                                            <ul className="text-sm px-10">
                                            
                                                <li className="py-8 text-blue-700 text-3xl font-semibold">
                                                    <p>15% Daily</p>
                                                </li>
                                                <li className="text-lg">
                                                    <p>- $1000 - $4,999</p>
                                                </li>
                                                <li className=" text-lg">
                                                    <p>- 24/7 Support</p>
                                                </li>
                                                <li className="text-lg">
                                                    <p>- 5% Referral Bonus</p>
                                                </li>
                                                <li className="py-5 w-full m-auto">
                                                <p className=" py-2 bg-white rounded-sm border border-blue-400 text-blue-400 text-center cursor-pointer" onClick={() => setModal1(!modal1)}>Buy pack</p>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    <div className="m-auto items-center py-2 rounded-2xl bg-white w-full lg:border-0 border-[0.1px] border-gray-200 text-center" >
                                        {/* <FaArrowCircleDown className="w-6 h-5 text-green-500" /> */}
                                        <div className="py-6 border-b-[1px] border-gray-400">
                                                <p className="text-lg font-semibold">Enterprize pack</p>
                                            
                                        </div>
                                        <div className="w-full">
                                            
                                            <ul className="text-sm px-10">
                                            
                                                <li className="py-8 text-blue-700 text-3xl font-semibold">
                                                    <p>20% Daily</p>
                                                </li>
                                                <li className="text-lg">
                                                    <p>- $1000 - $4,999</p>
                                                </li>
                                                <li className=" text-lg">
                                                    <p>- 24/7 Support</p>
                                                </li>
                                                <li className="text-lg">
                                                    <p>- 5% Referral Bonus</p>
                                                </li>
                                                <li className="py-5 w-full m-auto">
                                                <p className=" py-2 bg-white rounded-sm border border-blue-400 text-blue-400 text-center cursor-pointer" onClick={() => setModal1(!modal1)}>Buy pack</p>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                </div>
                                {/* <p className="bg-blue-500 text-white rounded-md mt-11 m-auto py-1 w-1/5 text-center">Buy pack</p> */}


                            </div>
                        </div>


                    </div>
                </section>
                <section className="w-full">
                    <Bottomnav />
                </section>
                <section>
                    {modal1 ?
                        <StarterPack/>
                        :
                        <p></p>
                    }
                </section>
    </div>
  );
}