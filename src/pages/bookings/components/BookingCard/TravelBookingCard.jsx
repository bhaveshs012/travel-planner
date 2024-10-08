import React from "react";
import {
  FaLocationDot,
  FaTrainSubway,
  FaCalendarDays,
  FaPlaneUp,
  FaClock,
  FaArrowRightLong,
} from "react-icons/fa6";
import { stringToDateConverter } from "../../../../utils/stringToDateConverter";
import { calculateTravelHours } from "../../../../utils/calculateTravelHours";

function TravelBookingCard({
  travelType,
  source,
  destination,
  departureDate,
  departureTime,
  arrivalDate,
  arrivalTime,
  bookingReceipt,
  location,
}) {
  const getIcon = () => {
    switch (travelType) {
      case "flight":
        return <FaPlaneUp className="text-white" />;
      case "train":
        return <FaTrainSubway className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 shadow-lg bg-white rounded-lg">
      <div className="flex items-center">
        <div className="p-4 rounded-lg bg-black text-center mr-4">
          {getIcon()}
        </div>
        <div className="items-start">
          <div className="text-lg font-semibold text-black flex items-center">
            <p>{source}</p>
            <FaArrowRightLong className="mx-2 text-xl" />
            <p>{destination}</p>
          </div>
          {location && (
            <div className="flex gap-1 my-2 items-center text-sm text-gray-600">
              <FaLocationDot />
              <p>{location}</p>
            </div>
          )}

          <div className="flex gap-1 items-center text-sm text-gray-600">
            <FaCalendarDays />
            <p>
              <span className="font-semibold">Departure:</span>{" "}
              {`${stringToDateConverter(departureDate)}  ${departureTime}`}
            </p>
          </div>
          <div className="flex my-2 gap-1 items-center text-sm text-gray-600">
            <FaCalendarDays />
            <p>
              <span className="font-semibold">Arrival:</span>{" "}
              {`${stringToDateConverter(arrivalDate)}  ${arrivalTime}`}
            </p>
          </div>

          <div className="flex gap-1 items-center text-sm text-gray-600">
            <FaClock />
            <p>
              {calculateTravelHours(
                departureDate,
                departureTime,
                arrivalDate,
                arrivalTime
              )}{" "}
              hours
            </p>
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

export default TravelBookingCard;
