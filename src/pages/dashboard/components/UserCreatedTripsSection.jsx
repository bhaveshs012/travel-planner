import React from "react";
import TripSummaryCard from "../../../components/TripSummaryCard/TripSummaryCard";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { getRandomCoverImage } from "../../../utils/getRandomCoverImage";

const UserCreatedTripsSection = ({ tripDetails }) => {
  const navigate = useNavigate();
  const handleCreateTripClick = () => {
    navigate("/plan/create", { exact: true });
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{"Trips Planned By You"}</h1>
        <button
          onClick={handleCreateTripClick}
          className="flex space-x-4 justify-center items-center px-4 py-2 border-2 border-black text-black text-sm font-semibold rounded hover:bg-black hover:text-white"
        >
          <FaPlus />
          <p>Plan a new Trip</p>
        </button>
      </div>
      <div className="h-full overflow-x-auto scroll-m-2">
        {tripDetails && tripDetails.length !== 0 ? (
          <div className="flex space-x-4">
            {tripDetails.map((tripDetail, index) => {
              return (
                <TripSummaryCard
                  key={tripDetail.tripId}
                  {...tripDetail}
                  image={getRandomCoverImage()}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center p-4">
            <p className="text-lg font-semibold">No trips found</p>
            <p className="text-md text-gray-400">
              Please create some trips !! Happy travelling 😁
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCreatedTripsSection;
