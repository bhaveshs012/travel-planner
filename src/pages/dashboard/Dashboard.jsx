import React, { useState } from "react";
import DashBoardMainContent from "./components/DashBoardMainContent";
import { SideBar } from "../../components";
import { sideBarLinks } from "./data/dashboardSidebarLinks";

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
        <DashBoardMainContent />
      </div>
    </div>
  );
};

export default Dashboard;
