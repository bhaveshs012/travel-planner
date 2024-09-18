import React from "react";
import { HotelBookingCard, TravelBookingCard } from "./components";
import { PageHeader } from "../../components";
import { FaPlus } from "react-icons/fa6";
import apiClient from "../../api/apiClient";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { AddBookingModal } from "../../components/index";
import LoadingScreen from "../common/LoadingScreen";
import ErrorScreen from "../common/ErrorScreen";

function Bookings() {
  const { tripId } = useParams();
  //* Add Booking Modal
  const bookingModalRef = useRef(null);
  const handleOpenModal = () => {
    bookingModalRef.current.openModal();
  };

  const fetchAllBookings = async () => {
    const response = await apiClient.get(`/bookings/${tripId}/getBookings`);
    return response.data.data;
  };

  const {
    data: tripBookingsData,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tripBookings"],
    queryFn: fetchAllBookings,
  });

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <div className="w-screen p-8">
      <AddBookingModal
        ref={bookingModalRef}
        tripId={tripId}
        refetch={refetch}
      />
      <PageHeader
        title={tripBookingsData.tripName}
        subtitle={tripBookingsData.tripDesc}
      />
      {/* Recent Bookings */}
      <div className="w-full mx-auto mt-10">
        <div className="flex justify-between items-center mb-4">
          <p className="ml-1 text-xl font-bold">Recent Bookings</p>
          <button
            onClick={handleOpenModal}
            className="flex space-x-4 justify-center items-center px-4 py-2 border-2 border-black text-black text-sm font-semibold rounded hover:bg-black hover:text-white"
          >
            <FaPlus />
            <p>Add a new Booking</p>
          </button>
        </div>
        <div className="space-y-4 ">
          {tripBookingsData.bookings.length === 0 ? (
            <div className="text-center p-4">
              <p className="text-md text-gray-400">
                No Bookings Added !! Save some Booking Details to view later 😁
              </p>
            </div>
          ) : (
            tripBookingsData.bookings.map((booking, index) =>
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
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookings;
