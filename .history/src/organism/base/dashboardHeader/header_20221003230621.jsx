import { BiUserCircle } from "react-icons/bi";
export const Header = () => {
   return (
      <div className="flex items-center justify-between portfolio-header">
         <h2 className>Portfolio</h2>
         <span>
            <BiUserCircle />
         </span>
      </div>
   );
};
