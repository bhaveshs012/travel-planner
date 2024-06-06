import React from "react";
import {
  UpcomingTrips,
  HotelBookingCard,
  TravelBookingCard,
} from "./components";
import bookings from "./data/bookings";

function Bookings() {
  return (
    <div className="w-screen p-8">
      <UpcomingTrips />
      {/* Recent Bookings */}
      <div className="w-full mx-auto mt-10">
        <div className="flex justify-between items-center mb-4">
          <p className="ml-1 text-xl font-bold">Recent Bookings</p>
          <button className="px-4 py-2 border-2 border-black text-black text-sm font-semibold rounded hover:bg-black hover:text-white">
            View More
          </button>
        </div>
        <div className="space-y-4 ">
          {bookings.map((booking, index) =>
            booking.bookingType === "travel" ? (
              <TravelBookingCard key={index} {...booking} />
            ) : (
              <HotelBookingCard key={index} {...booking} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookings;
