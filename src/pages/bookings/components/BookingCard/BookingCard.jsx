import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faTrain, faHotel } from "@fortawesome/free-solid-svg-icons";

const BookingCard = ({ type, title, subtitle }) => {
  const icons = {
    flight: faPlane,
    train: faTrain,
    hotel: faHotel,
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={icons[type]}
          className="text-black text-2xl mr-4"
        />
        <div>
          <div className="text-lg font-semibold text-black">{title}</div>
          <div className="text-sm text-gray-600">{subtitle}</div>
        </div>
      </div>
      <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-gray-800">
        View PDF
      </button>
    </div>
  );
};

export default BookingCard;
