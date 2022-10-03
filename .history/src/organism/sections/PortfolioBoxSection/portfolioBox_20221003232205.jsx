import Box from "../../base/PortfolioBox";

export const PortfolioBox = () => {
   return (
      <div className=>
         {Array(3)
            .fill()
            .map((el, i) => (
               <Box />
            ))}
      </div>
   );
};
