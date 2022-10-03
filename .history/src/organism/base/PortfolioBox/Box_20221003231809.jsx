import React from "react";

export const Box = ({ amount = "15,000", name = "total profits" }) => {
   return (
      <div className="portfolio_box flex flex-col justi">
         <h3>${amount}</h3>
         <p>{name}</p>
      </div>
   );
};
