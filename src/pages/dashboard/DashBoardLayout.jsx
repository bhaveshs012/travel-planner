import React, { createContext, useState } from "react";
import DashboardMain from "./components/DashboardMain";
import Sidebar, { SidebarItem } from "../../components/Sidebar/Sidebar";

export const SidebarContext = createContext();

const DashBoardLayout = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <DashboardMain />
      </div>
    </SidebarContext.Provider>
  );
};

export default DashBoardLayout;
