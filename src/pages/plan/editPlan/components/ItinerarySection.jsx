import React from "react";
import { DatePickerComponent, ItineraryListItem } from "./index";

function ItinerarySection() {
  return (
    <section className="grid gap-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Itinerary</h1>
          <p className="text-md text-gray-400 mt-2">
            Create your itinerary for each date of your trip.
          </p>
        </div>
        <div className="flex">
          <DatePickerComponent />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <ItineraryListItem />
        <ItineraryListItem />
        <ItineraryListItem />
      </div>
    </section>
  );
}

export default ItinerarySection;
