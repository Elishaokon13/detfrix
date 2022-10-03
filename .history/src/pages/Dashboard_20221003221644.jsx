import React from "react";
import DashboardLayout from "../organism/layout/DashboardLayout";
import Portfolio from "../portfolio/Portfolio";

export default function Dashboard() {
   return (
      <DashboardLayout>
         <Portfolio />
      </DashboardLayout>
   );
}
