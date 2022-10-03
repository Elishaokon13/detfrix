import { BiUserCircle } from "react-icons/bi";
export const Header = () => {
   return (
      <div className="flex items-center justify-between portfolio-header">
         <h2 className="text-2xl font-semibold capitalize">Portfolio</h2>
         <span>
            <BiUserCircle className="portfolio-icon" />
         </span>
      </div>
   );
};
