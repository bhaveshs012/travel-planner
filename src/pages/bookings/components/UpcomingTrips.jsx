import React from "react";
import TripCard from "./TripCard/TripCard";
import { SmallFilledButton } from "../../../components/Buttons";

function UpcomingTrips() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <p className="ml-1 text-xl font-bold">Upcoming Trips </p>
          <div className="rounded-full px-3 py-1 text-center bg-black text-white">
            <p className="text-lg font-bold">3</p>
          </div>
        </div>
        <div>
          <SmallFilledButton title={"Plan a New Trip"} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <TripCard />
        <TripCard />
        <TripCard />
      </div>
    </div>
  );
}

export default UpcomingTrips;
