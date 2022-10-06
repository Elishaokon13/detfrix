

//icons
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const ActivityBox = ({type}) => {
    return (
        <div className="flex items-center">
            {type === "withdrawal" ? <BsArrowDownCircle /> : type === "deposit" ? <BsArrowUpCircle /> : ""}
        </div>
    );
}

export default ActivityBox;
