import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashComponents/Sidebar";
import TopNav from "../components/DashComponents/TopNav";
function DashBoardLayout() {
    const [toggle, isToggled] = useState(false);


  return (
    <div className="h-full min-h-screen max-h-screen flex min-w-screen">
        <Sidebar toggle={toggle} isToggled={isToggled}/>
        <div className="grow h-screen min-h-screen  max-h-screen overflow-y-scroll">
            <TopNav toggle={toggle} isToggled={isToggled}/>
        <div className="max-h-screen min-h-screen ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashBoardLayout