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
      <div className="p-3 border border-black">
         <h3 className="text-lg font-semibold">Referral Link</h3>
         <p className="py-2">
            Automatically top up your account balance by sharing your Referral
            link. earn a percentage for whatever plan your Referred user buy.
         </p>

         <div className="flex items-center border-b-2 border-gray-700 pb-1.5 cursor-pointer">
            <input
               ref={textAreaRef}
               className="mr-3 font-semibold border-none focus:outline-none selection:bg-transparent w-80"
               contentEditable={false}
               defaultValue="https://defrix.com/referral/user"
            />
            <button className="flex items-center" onClick={(e) => onCopy(e)}>
               <FaCopy className="h-6 w-6" />
               <p className="ml-2 text-blue-800 uppercase font-medium">copy</p>
            </button>
         </div>
         {copyStatus && (
            <p className="text-blue-400">text copied to clipboard!</p>
         )}
      </div>
   );
};

export default ReferralBox;
