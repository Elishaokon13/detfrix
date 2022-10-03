import React from "react";

export const Box = ({ amount = "15,000", name = "total profits" }) => {
   return (
      <div className="portfolio_box flex flex-col justify-around items-center">
         <h3>${amount}</h3>h3 
         <p>{name}</p>
      </div>
   );
};
