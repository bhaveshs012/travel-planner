import React from "react";
import TopBar from "./TopBar";
import UpcomingTripSection from "./UpcomingTripSection";
import UserCreatedTripsSection from "./UserCreatedTripsSection";
import UserJoinedTripsSection from "./UserJoinedTripsSection";

const DashBoardMainContent = () => {
  return (
    <div className="p-8 gap-y-8 space-y-8">
      <TopBar />
      <UpcomingTripSection />
      <UserCreatedTripsSection />
      <UserJoinedTripsSection />
    </div>
  );
};

export default DashBoardMainContent;
