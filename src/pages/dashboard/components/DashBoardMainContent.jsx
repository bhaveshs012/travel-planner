import React from "react";
import TopBar from "./TopBar";
import UpcomingTripSection from "./UpcomingTripSection";
import UserCreatedTripsSection from "./UserCreatedTripsSection";
import UserJoinedTripsSection from "./UserJoinedTripsSection";

const DashBoardMainContent = ({ dashboardTripSummary }) => {

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
