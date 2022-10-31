import { BiDollarCircle } from "react-icons/bi";
import { GiTrade } from "react-icons/gi";

import { Link, useMatch, } from "react-router-dom";
import Bottomnav from "../../components/DashComponents/Bottomnav";


export default function Invest() {
  return (
    <div className="flex flex-col font-[roboto] items-center justify-center w-full h-full">

      <section className='w-full h-full  lg:px-16 py-6 p-0'>

                    <div className="lg:gap-3 mt-3 h-2/3 pb-10">
                        <p className="mx-2 font-semibold text-xl lg:pb-6 lg:px-0 px-10">Select investment type</p>

                        <div className="py-11 lg:px-16 px-8 lg:mt-3 h-full lg:bg-gray-200 bg-white rounded-lg lg:w-full" >
                            <div className=" h-full px-5 gap-5">
                                <div className="w-full flex lg:flex-row flex-col justify-center gap-20">
                                    <div className="items-center px-5 py-2 rounded-lg bg-white w-full lg:border-0 border-[0.1px] border-gray-200 text-center" >
                                        {/* <FaArrowCircleDown className="w-6 h-5 text-green-500" /> */}
                                        <div className="w-full">
                                            
                                            <ul className="text-sm lg:px-10 px-2">
                                            <li className="py-5">
                                                <GiTrade className="m-auto text-blue-500 text-5xl"/>
                                            </li>
                                                <li className="pb-12 text-2xl font-semibold">
                                                    <p>Copy Trade</p>
                                                </li>
                                                <li className="py-12 text-lg">
                                                    <p>Use our trade replicating server for two wekkly profit of $1000</p>
                                                </li>
                                                <li className="py-5 w-1/2 m-auto">
                                                <Link to='/dashboard/copytrade'>
                                                    <p className="px-5 py-2 bg-white border border-blue-400 text-blue-400 text-center cursor-pointer">CONTINUE</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="w-1/2 flex justify-end">
                                            {/* <FaArrowRight className="h-5 w-5" /> */}
                                        </div>
                                    </div>

                                    <div className="items-center px-5 py-2 rounded-lg bg-white w-full lg:border-0 border-[0.1px] border-gray-200 text-center" >
                                        {/* <FaArrowCircleDown className="w-6 h-5 text-green-500" /> */}
                                        <div className="w-full">
                                            
                                            <ul className="text-sm lg:px-10 px-2">
                                            <li className="py-5">
                                                <BiDollarCircle className="m-auto text-5xl text-blue-500"/>
                                            </li>
                                                <li className="pb-12 text-2xl font-semibold">
                                                    <p>Investment Pack</p>
                                                </li>
                                                <li className="py-12 text-lg">
                                                    <p>Choose any of our high rewarding investment packs.</p>
                                                </li>
                                                <li className="py-5 w-1/2 m-auto">
                                                <Link to='/dashboard/investmentpacks'>
                                                    <p className="px-5 py-2 bg-white border border-blue-400 text-blue-400 text-center cursor-pointer">CONTINUE</p>
                                                </Link>
                                                </li>
                                            </ul>
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
    </div>
  );
}