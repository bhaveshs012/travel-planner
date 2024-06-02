import React from "react";
import AvatarRow from "./AvatarRow";
import { FaPlus } from "react-icons/fa6";

function TripCard() {
  return (
    <div className="m-4 ml-0 shadow-xl">
      <div className="rounded-tl-lg rounded-tr-lg mb-0 p-4 justify-center items-center">
        <div className="relative group">
          <img
            src="https://picsum.photos/200/100?random=15"
            alt="Trip Image"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <span className="text-white font-semibold text-lg">
              View Details
            </span>
          </div>
        </div>
        {/* Card Text Title */}
        <div className="lg:relative mt-2 grid lg:grid-cols-2">
          <p className="text-md font-semibold">
            <span>Paris</span>
          </p>
          <p className="text-sm font-semibold lg:absolute lg:right-0">
            <span>25 May - 30 May</span>
          </p>
        </div>
        {/* Details */}
        <div className="my-1">
          <p className="text-sm">
            <span>
              {"5"} days, {"4"} nights
            </span>
          </p>
          <p className="text-sm">
            <span>5 people</span>
          </p>
        </div>
      </div>
      <div className="flex space-x-4 items-center bg-black rounded-bl-lg rounded-br-lg mt-0 p-4 text-white">
        <AvatarRow />
        <button title="Add New Member">
          <FaPlus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default TripCard;
