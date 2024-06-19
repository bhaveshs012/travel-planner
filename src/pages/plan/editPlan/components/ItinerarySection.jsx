import React from "react";
import {
  DatePickerComponent,
  ItineraryListItem,
  SectionHeading,
} from "./index";

function ItinerarySection() {
  return (
    <section className="grid gap-y-8">
      <div className="flex justify-between items-center">
        <SectionHeading
          title={"Itinerary"}
          subtile={"Create your itinerary for each date of your trip..."}
        />
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
