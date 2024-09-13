import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MainContentSpace } from "./components";
import SideBar from "../../../components/SideBarComponent/SideBar";
import { sideBarLinks } from "./data/sidebarLinks";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function EditPlan() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const tripPlan = useSelector((state) => state.tripPlan);
  const { tripId } = useParams();

  const handleSave = async () => {
    try {
      const tripMembersIds = tripPlan.tripMembers.map(
        (tripMember) => tripMember.userId
      );

      console.log("Trip Plan :: ", {
        startDate: tripPlan.startDate,
        endDate: tripPlan.endDate,
      });

      const response = await apiClient.patch(`/tripPlan/${tripId}`, {
        tripName: tripPlan.tripName,
        tripDesc: tripPlan.tripDesc,
        notes: tripPlan.notes,
        coverImage: tripPlan.coverImage,
        startDate: tripPlan.startDate,
        endDate: tripPlan.endDate,
        itinerary: JSON.stringify(tripPlan.itinerary),
        tripMembers: tripMembersIds,
        plannedBudget: tripPlan.plannedBudget,
      });
      toast.success("Trip Plan Updated Successfully !!");
    } catch (error) {
      toast.error("Some error occurred !!");
    }
  };

  return (
    <div className="flex w-full h-full">
      <SideBar
        sideBarOpen={isSidebarOpen}
        handleToggleSideBar={toggleSidebar}
        sideBarLinks={sideBarLinks}
        CTA={"Save"}
        CTAFunction={handleSave}
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
