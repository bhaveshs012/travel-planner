import React from "react";
import { FaLocationDot, FaHotel, FaCalendarDays } from "react-icons/fa6";
import { stringToDateConverter } from "../../../../utils/stringToDateConverter";

function HotelBookingCard({
  hotelName,
  location,
  checkInDate,
  checkoutDate,
  bookingReceipt,
}) {
  return (
    <div className="flex items-center justify-between p-4 shadow-lg">
      <div className="flex items-center">
        <div className="p-4 rounded-lg bg-black text-center mr-4">
          <FaHotel className="text-white" />
        </div>
        <div className="items-start">
          <div className="text-lg font-semibold text-black">{hotelName}</div>
          <div className="flex gap-1 my-2 items-center text-sm text-gray-600">
            <FaLocationDot />
            <p>{location}</p>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-1 items-center text-sm text-gray-600">
              <FaCalendarDays />
              <p>
                <span className="font-semibold">Check In:</span>{" "}
                {stringToDateConverter(checkInDate)}
              </p>
            </div>
            <div className="flex gap-1 items-center text-sm text-gray-600">
              <FaCalendarDays />
              <p>
                <span className="font-semibold">Check Out:</span>{" "}
                {stringToDateConverter(checkoutDate)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-900">
        <a href={bookingReceipt} target="_blank" rel="noopener noreferrer">
          View Booking
        </a>
      </button>
    </div>
  );
}

export default HotelBookingCard;
