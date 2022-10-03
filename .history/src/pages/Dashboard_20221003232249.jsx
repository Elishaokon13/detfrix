import React from "react";
import DashboardLayout from "../organism/layout/DashboardLayout";
import PortfolioBox from "../organism/sections/PortfolioBoxSection";
import Portfolio from "../portfolio/Portfolio";

export default function Dashboard() {
   return (
      <DashboardLayout>
         <PortfolioBox />
      </DashboardLayout>
   );
}
