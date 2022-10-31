import React, { useRef, useState } from "react";

import { FaXbox } from "react-icons/fa";
import {BiCheckShield} from "react-icons/bi";
import { FiXSquare } from "react-icons/fi";

import { FaCopy } from "react-icons/fa";


const StarterPack = () => {
  const [modal1, setModal1] = useState(true);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  
  return (
    <div>
          {/* <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-5 flex justify-center"> */}

      {
        modal1 ?
            <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-20 flex justify-center">
              <div className="fixed bottom-0 lg:bottom-1/4 w-full lg:w-[27%] text-sm shadow h-auto pb-11 bg-white border-t-2 border-solid border-gray-200 rounded-t-3xl px-9">
                <div className="flex py-8 justify-center">
                <div className="w-full">
                    <p className=" text-start lg:font-medium font-semibold text-xl lg:text-2xl text-black">Starter pack</p>
                    <p className=" text-start text-base lg:text-sm text-black">$1000 - $4,999</p>
                </div>
                  <div className="w-1/2 flex text-end justify-end">
                    <FaXbox className="cursor-pointer" onClick={() => setModal1(false)} />

                  </div>
                </div>
                <div className="w-full text-center justify-center">
                  <label className="text-center py-7 text-base">Input amount to invest</label>
                  <input type={Text} placeholder='$0.00' className="mt-2 border-0 text-center h-7 text-2xl focus:outline-none selection:bg-transparent"/>
                  <p className="mt-8 bg-blue-500 p-2 cursor-pointer text-white" onClick={() => [setModal2(true), setModal1(false)]}>Buy pack </p>
                </div>
              </div>
            </div>
            :
            <p></p>
      }
      
      {/* beginning of second modal */}
      {
              modal2 ?
                <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-20 flex justify-center">
                  <div className="fixed bottom-0 lg:bottom-1/4 w-full lg:w-[27%] shadow h-auto bg-white border-t-2 border-solid border-gray-200 rounded-t-3xl px-9">
                    
                <div className="w-full text-center justify-center py-10">
                <BiCheckShield className="text-green-500 text-center m-auto w-20 h-20"/>
                
                  <p className="text-center py-7 text-base">Your investment is successfull</p>
                  <p className="bg-blue-500 p-2 mt-4 cursor-pointer text-white" onClick={() => [setModal3(true), setModal2(false), setModal1(false)]}>Ok</p>
                </div>
                  
                    </div>
                  </div>
                :
                <p></p>
            }
            {/* end of second modal */}

        {/* beginning of third modal */}
        {
              modal3 ?
              <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-20 flex justify-center">
                
                <div className="fixed bottom-0 lg:bottom-1/4 w-full h-auto pb-11 lg:w-[27%] shadow bg-white border-t-2 border-solid border-gray-200 rounded-t-3xl px-9">

                <div className="w-full text-center justify-center pt-10">
                <FiXSquare className="text-red-500 text-center m-auto w-20 h-20"/>
                
                
                  <p className="text-center py-3 text-base font-semibold">Unsuccessful</p>
                  <p className="text-center py-3 text-base">Input at least minimum deposit</p>
                  <p className="bg-blue-500 p-2 mt-4 cursor-pointer text-white" onClick={() => [setModal1(false), setModal2(false), setModal3(false)]}>Ok</p>
                </div>
                  
                  
                </div>
                </div>
                :
                <p></p>
            }
            {/* end of third modal */}
    </div>
  );
};

export default StarterPack;