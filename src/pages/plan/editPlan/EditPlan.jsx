import React, { useState } from "react";
import { MainContentSpace } from "./components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBarComponent/SideBar";
import { sideBarLinks } from "./data/sidebarLinks";

function EditPlan() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { tripId } = useParams();
  const navigate = useNavigate();
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
        <MainContentSpace />
      </div>
    </div>
  );
}

export default EditPlan;
