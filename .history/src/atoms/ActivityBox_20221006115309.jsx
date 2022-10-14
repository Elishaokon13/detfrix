//icons
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { BiHourglass } from "react-icons/bi";

const ActivityBox = ({ type }) => {
   return (
       <div className="flex items-center p-3">
           <span>
               
           </span>
        
         <span className="flex flex-col items-baseline">
            <h4>deposit</h4>
            <h5>8 oct 2021</h5>
         </span>

         <span>
            <h4>+234.65</h4>
            <h5>0.00057339BTC</h5>
         </span>
      </div>
   );
};

export default ActivityBox;
