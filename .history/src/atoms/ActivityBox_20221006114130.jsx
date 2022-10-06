//icons
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { BiHourGlass } from "react-icons/bi";

const ActivityBox = ({ type }) => {
   return (
      <div className="flex items-center">
         {type === "withdrawal" ? (
               <BsArrowDownCircle className={"h-8 w-"} />
         ) : type === "deposit" ? (
            <BsArrowUpCircle />
         ) : (
            <BiHourGlass />
         )}

           <span>
               
         </span>
      </div>
   );
};

export default ActivityBox;
