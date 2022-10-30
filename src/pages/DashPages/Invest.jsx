import { FcSettings } from "react-icons/fc";


export default function Invest() {
  return (
    <div className="flex flex-col font-[roboto] items-center justify-center w-full h-full">
      Invest

      <section className='w-full h-full  lg:px-8 lg:py-6 p-0'>

                    <div className="lg:gap-3 mt-3 h-2/3 pb-10">
                        <p className="mx-2 font-semibold text-lg pb-6">Select withdrawal method</p>

                        <div className="py-11 px-11 mt-3 h-full lg:bg-gray-200 bg-white rounded-lg lg:w-full" >
                            <div className=" h-full px-5 gap-5">
                                <div className="w-full flex justify-center gap-4">
                                    <div className="items-center px-5 py-2 rounded-sm bg-white w-full lg:border-0 border-[0.1px] border-gray-200 text-center" >
                                        {/* <FaArrowCircleDown className="w-6 h-5 text-green-500" /> */}
                                        <div className="w-full">
                                            
                                            <ul className="text-sm px-10">
                                            <li className="py-3">
                                                <FcSettings className="m-auto"/>
                                            </li>
                                                <li className="py-3">
                                                    <p>COPY TRADE</p>
                                                </li>
                                                <li className="py-3">
                                                    <p>$57.155.40</p>
                                                </li>
                                                <li className="py-3 w-1/2 m-auto">
                                                    <p className="px-5 py-2 bg-white border border-blue-400 text-blue-400 text-center">CONTINUE</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="w-1/2 flex justify-end">
                                            {/* <FaArrowRight className="h-5 w-5" /> */}
                                        </div>
                                    </div>

                                    <div className="items-center px-5 py-2 rounded-sm bg-white w-full hover:bg-gray-50 lg:border-0 border-[0.1px] border-gray-200" >
                                        {/* <FaArrowCircleDown className="w-6 h-5 text-green-500" /> */}
                                        <div className="w-1/2">
                                            <p>COPY TRADE</p>
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
                                            {/* <FaArrowRight className="h-5 w-5" /> */}
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>


                    </div>
                </section>
    </div>
  );
}