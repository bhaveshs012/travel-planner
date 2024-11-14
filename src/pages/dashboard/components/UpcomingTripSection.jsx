import React from "react";
import UpcomingTripSummaryCard from "./UpcomingTripSummaryCard";
import tripIllustraion from "/assets/tripCoverImages/2.png";

const UpcomingTripSection = ({ tripDetails }) => {
  return (
    <div className="space-y-2">
      <div>
        <h1 className="text-xl font-bold">{"Your Upcoming Trips"}</h1>
      </div>
      <div>
        {tripDetails && tripDetails.length !== 0 ? (
          <UpcomingTripSummaryCard
            key={1}
            image={tripIllustraion}
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
        ) : (
          <div className="text-center p-4">
            <p className="text-lg font-semibold">You are all caught up</p>
            <p className="text-md text-gray-400">
              No upcoming trips !! Happy travelling 😁
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingTripSection;
