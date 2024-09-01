import React from "react";
import TopBar from "./TopBar";
import UpcomingTripSection from "./UpcomingTripSection";
import UserCreatedTripsSection from "./UserCreatedTripsSection";
import UserJoinedTripsSection from "./UserJoinedTripsSection";
import ApiConstants from "../../../constants/apiConstants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DashBoardMainContent = () => {
  const fetchDashboardTripSummary = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/tripPlan/getTripDashboardSummary`,
      { withCredentials: true }
    );
    return response.data.data;
  };

  const {
    data: dashboardTripSummary,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["dashboardTripSummary"],
    queryFn: fetchDashboardTripSummary,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-8 gap-y-8 space-y-8">
      <TopBar />
      <UpcomingTripSection tripDetails={dashboardTripSummary.upcomingTrip} />
      <UserCreatedTripsSection
        tripDetails={dashboardTripSummary.createdTrips}
      />
      <UserJoinedTripsSection tripDetails={dashboardTripSummary.joinedTrips} />
    </div>
  );
};

export default DashBoardMainContent;
