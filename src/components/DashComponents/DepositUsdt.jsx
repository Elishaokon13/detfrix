import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

import { FaXbox } from "react-icons/fa";
import { ImWarning } from "react-icons/im";
import { FaCopy } from "react-icons/fa";


const DepositUsdt = () => {
  const [modal1, setModal1] = useState(true);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const textAreaRef = useRef(null);
  const [copyStatus, setCopyStatus] = useState(false);

  const onCopy = (e) => {
    e.preventDefault();
    textAreaRef.current.select();
    console.log(textAreaRef.current.select());
    document.execCommand("copy");
    e.target.focus();
    setCopyStatus(true);
  };

  if (copyStatus) {
    setTimeout(() => setCopyStatus(false), 3000);
  }

  return (
    <div>
          {/* <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-5 flex justify-center"> */}

      {
        modal1 ?
            <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-20 flex justify-center">
              <div className="fixed bottom-0 lg:bottom-1/4 w-full lg:w-2/6 shadow h-auto pb-11 bg-white border-t-2 border-solid border-gray-200 rounded-t-3xl px-9">
                <div className="flex py-8 justify-center">

                  <p className="w-full text-start text-base lg:text-sm">withdrawal information</p>
                  <div className="w-1/2 flex text-end justify-end">
                    <FaXbox className="cursor-pointer" onClick={() => setModal1(false)} />

                  </div>
                </div>
                <div className="w-full text-center justify-center">
                  <p className="text-start">Input amount to withdraw in USDT</p>
                  <input className="font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full" />
                  <p className="text-start pt-5">Wallet address for withdrawal</p>
                  <input className="font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full" />
                  <p className="bg-blue-500 p-2 mt-4 cursor-pointer text-white" onClick={() => [setModal2(true), setModal1(false)]}>Okay </p>
                </div>
              </div>
            </div>
            :
            <p></p>
      }
      
      {/* beginning of second modal */}
      {
              modal2 ?
                <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-5 flex justify-center">
                  <div className="fixed bottom-0 lg:bottom-1/4 w-full lg:w-2/6 shadow h-auto pb-11 bg-white border-t-2 border-solid border-gray-200 rounded-t-3xl px-9">
                    <div className="flex py-8 justify-center">

                      <p className="w-full text-start text-base lg:text-sm">Review</p>
                      <div className="w-1/2 flex text-end justify-end">
                        <FaXbox className="cursor-pointer" onClick={() => [setModal1(false), setModal2(false)]} />

                      </div>
                    </div>
                    <div className="w-full text-center justify-center">
                      <ul className="flex justify-center">
                        <li className="w-1/2 text-center">Amount</li>
                        <li className="w-1/2 text-center">$10</li>
                      </ul>
                      <ul className="flex first:justify-center">
                        <li className="w-1/2">Charge</li>
                        <li className="w-1/2">$10</li>
                      </ul>
                      <ul className="flex justify-center">
                        <li className="w-1/2">Total</li>
                        <li className="w-1/2">$10</li>
                      </ul>
                      <p className="bg-blue-500 p-2 mt-4 text-white cursor-pointer" onClick={() => [setModal3(true), setModal2(false), setModal1(false)]}>Deposit</p>
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
              <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-5 flex justify-center">
                
                <div className="fixed bottom-0 lg:bottom-1/4 w-full h-auto pb-11 lg:w-1/2 shadow bg-white border-t-2 border-solid border-gray-200 rounded-t-3xl px-9">
                  <div className="flex py-8 justify-center">

                    <p className="w-full text-start text-base lg:text-sm">Review</p>
                    <div className="w-1/2 flex text-end justify-end">
                      <FaXbox className="cursor-pointer" onClick={() => [setModal1(false), setModal2(false), setModal3(false)]} />

                    </div>
                  </div>
                  <div className="w-full text-center justify-center">
                    <ul className="border border-green-600 rounded-sm flex p-3">
                      <div className="w-[10%]">
                        <ImWarning className="text-green-500 w-8 h-8 m-auto" />
                      </div>
                      <p className="w-[90%] text-center text-sm lg:text-lg">Scan QR code or copy wallet address to deposit</p>
                    </ul>
                    <div className="py-4 h-auto mx-auto my-auto w-full max-w-[140px]">
                      <QRCode
                      className="h-auto max-w-full w-full"
                      value='{value}'
                      viewBox={`0 0 256 256`}
                      />
                    </div>

                    <p className="text-start">Wallet address</p>
                    <div className="flex">
                      <input
                        ref={textAreaRef}
                        className="mr-3 font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full" readOnly
                        defaultValue="https://detfrix.com/referral/user"
                      />
                      <button className="flex items-center" onClick={(e) => onCopy(e)}>
                        <FaCopy className="h-4 w-5 text-gray-700" />
                      </button>
                    </div>
                    {copyStatus && (
                      <p className="text-blue-400 ">text copied to clipboard!</p>
                    )}
                    <p className="bg-blue-500 p-2 mt-4 cursor-pointer text-white" onClick={() => [setModal3(false), setModal1(false), setModal2(false)]}>Confirm Deposit</p>
                  </div>
                </div>
                </div>
                :
                <p></p>
            }
            {/* end of third modal */}

    {/* </div> */}
    </div>
  );
};

export default DepositUsdt;