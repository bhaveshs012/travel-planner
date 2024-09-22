import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MainContentSpace } from "./components";
import SideBar from "../../../components/SideBarComponent/SideBar";
import { sideBarLinks } from "./data/sidebarLinks";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { FaSave } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";

function EditPlan() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const tripPlan = useSelector((state) => state.tripPlan);
  const { tripId } = useParams();
  const queryClient = useQueryClient();

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const tripMembersIds = tripPlan.tripMembers.map(
        (tripMember) => tripMember.userId
      );
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
      // On save we refetch the trip Details
      queryClient.refetchQueries(["getTripDetailsById", tripId]);
      toast.success("Trip Plan Updated Successfully !!");
    } catch (error) {
      toast.error("Some error occurred !!");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex w-full h-full">
      <SideBar
        sideBarOpen={isSidebarOpen}
        handleToggleSideBar={toggleSidebar}
        sideBarLinks={sideBarLinks}
        tripId={tripId}
        CTA={isSaving ? "Please Wait.." : "Save"}
        isCTADisabled={isSaving}
        CTAFunction={handleSave}
        CTAIcon={<FaSave />}
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
