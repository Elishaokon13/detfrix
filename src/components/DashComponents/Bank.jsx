import React, { useState } from "react";
import { FaXbox } from "react-icons/fa";

const Bank = () => {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

    return (
        <div>
            {modal1 ?
                <p></p>
                :
                <div className="fixed bottom-0 left-0 w-full shadow h-full bg-black bg-opacity-20 flex justify-center">

                    {
                        modal2 ?
                            <div className="fixed bottom-0 lg:bottom-1/4 w-full lg:w-2/6 shadow h-1/2 bg-white border-t-2 border-solid border-gray-200 rounded-t-3xl px-9">
                                <div className="flex py-8 justify-center">

                                    <p className="w-full text-start text-base lg:text-sm">Review</p>
                                    <div className="w-1/2 flex text-end justify-end">
                                        <FaXbox onClick={() => setModal1(!modal1)} />

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
                                    <p className="bg-blue-800 p-2 mt-4 rounded text-white" onClick={() => setModal1(!modal1)}>Confirm Withdrawal</p>
                                </div>
                            </div>
                            :

                            <div className="fixed bottom-0 lg:bottom-1/4 w-full lg:w-2/6 shadow h-1/2 bg-white border-t-2 border-solid border-gray-200 rounded-t-3xl px-9">
                                <div className="flex py-8 justify-center">

                                    <p className="w-full text-start text-base lg:text-sm">Withdraw</p>
                                    <div className="w-1/2 flex text-end justify-end">
                                        <FaXbox onClick={() => setModal1(!modal1)} />

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
                                    <p className="bg-blue-800 p-2 mt-4 rounded text-white" onClick={() => setModal2(!modal2)}>Confirm Withdrawal</p>

                                    :

                                    <div className="fixed bottom-0 lg:bottom-1/4 w-full lg:w-2/6 shadow h-1/2 bg-white border-t-2 border-solid border-gray-200 rounded-t-3xl px-9">
                                        <div className="flex py-8 justify-center">

                                            <p className="w-full text-start text-base text-[700] lg:text-sm">Withdrawal Information</p>
                                            <div className="w-1/2 flex text-end justify-end">
                                                <FaXbox onClick={() => setModal1(!modal1)} />

                                            </div>
                                        </div>
                                        <div className="w-full text-center justify-center">
                                            <p className="text-start">Input amount to withdraw in Naira</p>
                                            <input className="font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full" />

                                            <p className="bg-blue-800 p-2 rounded mt-4 text-white" onClick={() => setModal1(!modal1)}>Withdraw</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                    }
                </div>
            }
        </div>
    )
}

export default Bank;
