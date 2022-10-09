//icons
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { BiHourglass } from "react-icons/bi";

const ActivityBox = ({ type }) => {
   return (
      <div className="flex items-center">
         {type === "withdrawal" ? (
            <BsArrowDownCircle className={"h-8 w-8 fill-red-800"} />
         ) : type === "deposit" ? (
            <BsArrowUpCircle className={"h-8 w-8 fill-blue-800"} />
         ) : (
            <BiHourglass />
         )}

         <span></span>
      </div>
   );
};

export default ActivityBox;
