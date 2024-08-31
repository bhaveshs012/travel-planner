import React from "react";
import UpcomingTripSummaryCard from "./UpcomingTripSummaryCard";

const UpcomingTripSection = ({ tripDetails }) => {
  return (
    <div className="space-y-2">
      <div>
        <h1 className="text-xl font-bold">{"Your Upcoming Trips"}</h1>
      </div>
      <div>
        <UpcomingTripSummaryCard
          image={
            "https://images.unsplash.com/photo-1545580492-8859ba8323f0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          tripId={tripDetails.tripId}
          amount={tripDetails.plannedBudget}
          days={tripDetails.totalDays}
          nights={tripDetails.totalNights}
          tripStartDate={new Date(tripDetails.startDate)}
          placesToVisit={tripDetails.placesToVisit}
          description={tripDetails.tripDesc}
          title={tripDetails.tripName}
          people={tripDetails.totalMembers}
        />
      </div>
    </div>
  );
};

export default UpcomingTripSection;
