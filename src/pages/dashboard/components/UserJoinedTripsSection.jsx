import React from "react";
import tripDummyData from "../data/tripDummyData";
import TripSummaryCard from "../../../components/TripSummaryCard/TripSummaryCard";

const UserJoinedTripsSection = () => {
  return (
    <div className="space-y-2">
      <div>
        <h1 className="text-xl font-bold">{"Trips Joined By You"}</h1>
      </div>
      <div className="h-full overflow-x-auto scroll-m-2">
        <div className="flex space-x-4">
          {tripDummyData.map((tripDetails) => {
            return <TripSummaryCard {...tripDetails} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserJoinedTripsSection;
