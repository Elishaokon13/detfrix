import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

import { FaXbox } from "react-icons/fa";
import {BiCheckShield} from "react-icons/bi";
import { FaCopy } from "react-icons/fa";


const CopyTradePayment = () => {
  const [modal1, setModal1] = useState(true);
  const [modal2, setModal2] = useState(false);

  return (
    <div>
          {/* <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-5 flex justify-center"> */}

      {
        modal1 ?
            <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-20 flex justify-center">
              <div className="fixed bottom-0 lg:bottom-1/4 w-full lg:w-[27%] text-sm shadow h-auto pb-11 bg-white border-t-2 border-solid border-gray-200 rounded-t-3xl px-9">
                <div className="flex py-8 justify-center">

                  <p className="w-full text-start text-base lg:text-sm">make a payment</p>
                  <div className="w-1/2 flex text-end justify-end">
                    <FaXbox className="cursor-pointer" onClick={() => setModal1(false)} />

                  </div>
                </div>
                <div className="w-full text-center justify-center">
                  <p className="text-center py-7 text-base">pay trade replication server subscription $949(billed monthly)</p>
                  <p className="bg-blue-500 p-2 mt-4 cursor-pointer text-white" onClick={() => [setModal2(true), setModal1(false)]}>Proceed </p>
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
                
                  <p className="text-center py-7 text-base">Trade subscription was successfully paid</p>
                  <p className="bg-blue-500 p-2 mt-4 cursor-pointer text-white" onClick={() => [setModal2(false), setModal1(false)]}>Ok</p>
                </div>
                  
                    </div>
                  </div>
                :
                <p></p>
            }
            {/* end of second modal */}

       {/* beginning of third modal */}
       

    {/* </div> */}
    </div>
  );
};

export default CopyTradePayment;