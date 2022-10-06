

//icons
import { BsArrowDownCircle } from "react-icons/bs";

const ActivityBox = ({type}) => {
    return (
        <div className="flex items-center">
            {type === "withdrawal" ? <BsArrowDownCircle}
        </div>
    );
}

export default ActivityBox;
