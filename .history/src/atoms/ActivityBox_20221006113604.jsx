

//icons
import { BsArrowDownCircle } from "react-icons/bs";

const ActivityBox = ({type}) => {
    return (
        <div className="flex items-center">
            {type === "withdraw"}
        </div>
    );
}

export default ActivityBox;
