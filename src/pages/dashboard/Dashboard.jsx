import React, { useState } from "react";
import { SideBar } from "../../components";
import { sideBarLinks } from "./data/dashboardSidebarLinks";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full h-full">
      <SideBar
        sideBarOpen={isSidebarOpen}
        handleToggleSideBar={toggleSidebar}
        sideBarLinks={sideBarLinks}
      />
      <div
        className={`w-full ${
          isSidebarOpen ? "w-3/4" : "w-full"
        } h-full overflow-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
