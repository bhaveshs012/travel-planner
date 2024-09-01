import React from "react";
import { HotelBookingCard, TravelBookingCard } from "./components";
import { PageHeader } from "../../components";
import bookings from "./data/bookings";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import ApiConstants from "../../constants/apiConstants";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function Bookings() {
  const { tripId } = useParams();

  const fetchAllBookings = async () => {
    const response = await axios.get(
      `${ApiConstants.baseUrl}/bookings/${tripId}/getBookings`,
      { withCredentials: true }
    );
    console.log("Bookings Data", response.data.data);

    return response.data.data;
  };

  const {
    data: tripBookingsData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["tripBookings"],
    queryFn: fetchAllBookings,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-screen p-8">
      <PageHeader
        title={tripBookingsData.tripName}
        subtitle={tripBookingsData.tripDesc}
      />
      {/* Recent Bookings */}
      <div className="w-full mx-auto mt-10">
        <div className="flex justify-between items-center mb-4">
          <p className="ml-1 text-xl font-bold">Recent Bookings</p>
          <button className="flex space-x-4 justify-center items-center px-4 py-2 border-2 border-black text-black text-sm font-semibold rounded hover:bg-black hover:text-white">
            <FaPlus />
            <p>Add a new Booking</p>
          </button>
        </div>
        <div className="space-y-4 ">
          {tripBookingsData.bookings.map((booking, index) =>
            booking.bookingType === "travel" ? (
              <TravelBookingCard
                key={index}
                {...booking.bookingDetails}
                bookingReceipt={booking.bookingReceipt}
              />
            ) : (
              <HotelBookingCard
                key={index}
                {...booking.bookingDetails}
                bookingReceipt={booking.bookingReceipt}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookings;
