import Box from "../../base/PortfolioBox";

export const PortfolioBox = () => {
   return (
      <div className="flex items-center mt-3 mb-1.5 portfolio-cards justify-around">
         {Array(3)
            .fill()
            .map((el, i) => (
               <Box />
            ))}
      </div>
   );
};
