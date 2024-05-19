import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardMain from "./components/DashboardMain";
const DashBoardLayout = () => {
  return (
    <div className="grid grid-cols-7 h-screen bg-dashboard-bg">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-6">
        <DashboardMain />
      </div>
    </div>
  );
};

export default DashBoardLayout;
