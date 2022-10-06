//icons
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { BiHourGlass } from "react-icons/bi";

const ActivityBox = ({ type }) => {
   return (
      <div className="flex items-center">
         {type === "withdrawal" ? (
            <BsArrowDownCircle className={"h-8 w-8"} />
         ) : type === "deposit" ? (
            <BsArrowUpCircle className={"h-8 w-8"}/>
         ) : (
            <BiHourGlass />
         )}

         <span></span>
      </div>
   );
};

export default ActivityBox;
