import React, { useRef } from "react";
import { FaPersonCirclePlus, FaPencil } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  setTripPlan,
  setTripName,
  setTripDesc,
  setStartDate,
  setEndDate,
} from "../../../../features/tripPlanSlice";
import apiClient from "../../../../api/apiClient";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { InviteUserModal } from "../../../../components";

const HeroSection = () => {
  const { tripId } = useParams();

  //* Redux ::
  const tripPlan = useSelector((state) => state.tripPlan);
  const dispatch = useDispatch();

  //* Modal Setup
  const inviteUserModalRef = useRef(null);
  const handleOpenModal = (e) => {
    e.preventDefault();
    inviteUserModalRef.current.openModal();
  };

  //* Fetch Trip Details from backend
  const getTripDetailsById = async () => {
    const response = await apiClient.get(`/tripPlan/${tripId}/getTripPlan`);
    dispatch(setTripPlan(response.data.data));
    return response.data.data;
  };

  const {
    data: tripPlanData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getTripDetailsById", tripId],
    queryFn: getTripDetailsById,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="relative h-auto w-full">
      <InviteUserModal
        ref={inviteUserModalRef}
        fromTripDashboard={true}
        tripId={tripId}
      />
      <div className="h-auto w-full">
        <img
          src="https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080.jpg?w=718&h=538"
          alt="Taj Mahal"
          className="w-full h-64 object-fill"
        />
        <div className="absolute top-2 right-2 flex w-fit h-fit rounded-full p-4 bg-white bg-opacity-80 text-black">
          <FaPencil />
        </div>
      </div>
      <div className="relative top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 max-w-xl w-full mx-4 -mt-10">
        <h1 className="text-3xl font-bold mb-4">{tripPlan.tripName}</h1>
        <p className="text-sm font-medium mb-4 text-gray-400">
          {tripPlan.tripDesc}
        </p>
        <div className="flex justify-end space-x-2">
          <div
            className="my-1 flex justify-center items-center space-x-2"
            onClick={(e) => {
              handleOpenModal(e);
            }}
          >
            <button className="bg-gray-200 text-gray-800 p-2 rounded-full">
              <span>
                <FaPersonCirclePlus />
              </span>
            </button>
            <button className="bg-gray-200 text-gray-800 p-2 rounded-lg">
              <span className="text-xs font-semibold">View Trip Mates</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
