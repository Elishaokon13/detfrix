

//icons
import { BsArrowDownCircle } from "react-icons/bs";

const ActivityBox = ({type}) => {
    return (
        <div className="flex items-center">
            {type === "withdrawal" ? <BsArrowDownCircle /> : type === "deposit" ? <BsArrowU}
        </div>
    );
}

export default ActivityBox;
