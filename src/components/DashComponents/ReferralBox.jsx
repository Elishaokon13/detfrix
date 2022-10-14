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
      <div className="p-3 w-50 font-[roboto] rounded bg-blue-100 border border-black">
         <h3 className="text-lg text-center font-semibold">Referral Link</h3>
         <p className="py-2 text-sm">
            Automatically top up your <br/> account balance by sharing your Referral
            link. earn a percentage for whatever plan your Referred user buy.
         </p>

         <div className="flex items-center border-b-2 border-gray-700 pb-1.5 cursor-pointer">
            <input
               ref={textAreaRef}
               className="mr-3 font-semibold border-none focus:outline-none selection:bg-transparent w-80"
               contentEditable={false}
               defaultValue="https://detfrix.com/referral/user"
            />
            <button className="flex items-center" onClick={(e) => onCopy(e)}>
               <FaCopy className="h-6 w-6" />
               <p className="ml-2 text-white uppercase rounded-md border border-transparent bg-blue-600 font-medium">copy</p>
            </button>
         </div>
         {copyStatus && (
            <p className="text-blue-400 ">text copied to clipboard!</p>
         )}
      </div>
   );
};

export default ReferralBox;
