import React from "react";
import TopBar from "./TopBar";
import UpcomingTripSection from "./UpcomingTripSection";
import UserCreatedTripsSection from "./UserCreatedTripsSection";
import UserJoinedTripsSection from "./UserJoinedTripsSection";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../../api/apiClient";
import LoadingScreen from "../../common/LoadingScreen";
import ErrorScreen from "../../common/ErrorScreen";

const DashBoardMainContent = () => {
  const fetchDashboardTripSummary = async () => {
    const response = await apiClient.get(`/tripPlan/getTripDashboardSummary`);
    return response.data.data;
  };

  const {
    data: dashboardTripSummary,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["fetchDashboardTripSummary"],
    queryFn: fetchDashboardTripSummary,
  });

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

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
