import React from "react";

export const Box = ({ amount = "15,000", name = "total profits" }) => {
   return (
      <div className="portfolio_box">
           <h3>${amount}</h3>
           <p></p>
      </div>
   );
};
