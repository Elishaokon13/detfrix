import React from 'react';
import { useState, useRef } from "react";
//icons
import { FaCopy } from "react-icons/fa";

const ReferralBox = () => {
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
      <div className="lg:border lg:border-black p-3 w-50 font-[roboto] rounded bg-white border-[0.1px] border-gray-200">
         <h3 className="text-lg text-start font-semibold">Referral Link</h3>
         <p className="py-2 text-sm">
            Automatically top up your <br/> account balance by sharing your Referral
            link. earn a percentage for whatever plan your Referred user buy.
         </p>

         <div className="flex items-center pb-1.5 cursor-pointer">
            <input
               ref={textAreaRef}
               className="mr-3 font-medium text-sm border-2 rounded-md p-1 focus:outline-none selection:bg-transparent w-full"
               contentEditable={false}
               defaultValue="https://detfrix.com/referral/user"
            />
            <button className="flex items-center" onClick={(e) => onCopy(e)}>
               <FaCopy className="h-4 w-5 text-gray-700" />
               <p className="ml-2 text-blue-400 uppercase rounded-md border border-transparent text-sm">copy</p>
            </button>
         </div>
         {copyStatus && (
            <p className="text-blue-400 ">text copied to clipboard!</p>
         )}
      </div>
   );
};

export default ReferralBox;
