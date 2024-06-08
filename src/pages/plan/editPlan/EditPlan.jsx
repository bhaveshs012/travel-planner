import React, { useState } from "react";
import { MainContentSpace, SideBar } from "./components";

function EditPlan() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full h-full">
      <SideBar
        sideBarOpen={isSidebarOpen}
        handleToggleSideBar={toggleSidebar}
      />
      <div
        className={`w-full ${
          isSidebarOpen ? "w-3/4" : "w-full"
        } h-full overflow-auto`}
      >
        <MainContentSpace />
      </div>
    </div>
  );
}

export default EditPlan;
