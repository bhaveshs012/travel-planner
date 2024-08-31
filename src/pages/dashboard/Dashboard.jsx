import React, { useState } from "react";
import DashBoardMainContent from "./components/DashBoardMainContent";
import { SideBar } from "../../components";
import { sideBarLinks } from "./data/dashboardSidebarLinks";
import ApiConstants from "../../constants/apiConstants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const fetchDashboardTripSummary = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/tripPlan/getTripDashboardSummary`,
      { withCredentials: true }
    );
    return response.data.data;
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["dashboardTripSummary"],
    queryFn: fetchDashboardTripSummary,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
        <DashBoardMainContent dashboardTripSummary={data} />
      </div>
    </div>
  );
};

export default Dashboard;
