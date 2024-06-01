import React from "react";
import { UpcomingTrips, BookingCard, HotelBookingCard } from "./components";

function Bookings() {
  const bookings = [
    {
      type: "flight",
      title: "New York to London",
      subtitle: "2024-06-01",
      icon: "faPlane",
    },
    {
      type: "train",
      title: "Paris to Berlin",
      subtitle: "2024-07-10",
      icon: "faTrain",
    },
    {
      type: "hotel",
      title: "Hotel California",
      subtitle: "Check-in: 2024-08-15, Check-out: 2024-08-20",
      icon: "faHotel",
    },
  ];
  return (
    <div className="w-screen p-4">
      <UpcomingTrips />
      {/* Recent Bookings */}
      <div className="w-full mx-auto mt-10">
        <div className="flex justify-between items-center mb-4">
          <p className="ml-1 text-xl font-bold">Recent Bookings</p>
          <button className="px-4 py-2 border-2 border-black text-black text-sm font-semibold rounded hover:bg-black hover:text-white">
            View More
          </button>
        </div>
        <HotelBookingCard
          hotelName="Hotel Imperial Blue"
          location={"7th Street, California, USA"}
          checkInDate={"25-05-2024"}
          checkoutDate={"30-5-2024"}
        />
      </div>
    </div>
  );
}

export default Bookings;
