import React from "react";
import TripSummaryCard from "../../../components/TripSummaryCard/TripSummaryCard";
import { getRandomCoverImage } from "../../../utils/getRandomCoverImage";
const UserJoinedTripsSection = ({ tripDetails }) => {
  return (
    <div className="space-y-2">
      <div>
        <h1 className="text-xl font-bold">{"Trips Joined By You"}</h1>
      </div>
      <div className="h-full overflow-x-auto scroll-m-2">
        {tripDetails && tripDetails.length !== 0 ? (
          <div className="flex space-x-4">
            {tripDetails.map((tripDetail) => {
              return (
                <TripSummaryCard
                  key={tripDetail.tripId}
                  {...tripDetail}
                  image={getRandomCoverImage()}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center p-4">
            <p className="text-lg font-semibold">No trips found</p>
            <p className="text-md text-gray-400">
              Please add some trips !! Happy travelling 😁
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserJoinedTripsSection;
