//icons
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { BiHourGlass } from "react-icons/bi";

const ActivityBox = ({ type }) => {
   return (
      <div className="flex items-center">
         {type === "withdrawal" ? (
            <BsArrowDownCircle />
         ) : type === "deposit" ? (
            <BsArrowUpCircle />
         ) : (
            <B
         )}
      </div>
   );
};

export default ActivityBox;
