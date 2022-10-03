import Box from "../../base/PortfolioBox";

export const PortfolioBox = () => {
   return (
       <div>
           {Array(3).fill().map((el,i) =>  <Box />)}
        
      </div>
   );
};
