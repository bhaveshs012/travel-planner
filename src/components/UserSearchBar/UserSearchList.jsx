import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../api/apiClient";
import { useDispatch } from "react-redux";
import { addTripMember } from "../../features/tripPlanSlice";

const UserSearchList = ({ searchTerm }) => {
  //* Redux States
  const dispatch = useDispatch();

  const searchUsers = async () => {
    const response = await apiClient.get(`users/searchUsers`, {
      params: { searchParameter: searchTerm },
    });
    return response.data.data;
  };

  const {
    data: tripMembers,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["searchUsers", searchTerm],
    queryFn: searchUsers,
  });

  function addUserToTrip(e, tripMember) {
    e.preventDefault();
    dispatch(addTripMember(tripMember));
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col gap-4 justify-center bg-gray-100 w-full max-h-44 overflow-y-scroll p-4 rounded-lg">
      {tripMembers.map((tripMember, index) => {
        return (
          <button
            key={index}
            onClick={(e) => addUserToTrip(e, tripMember)}
            className="flex space-x-4 p-2 rounded-lg"
          >
            <img
              src={tripMember.image}
              alt="userImage"
              className="rounded-full h-5 w-5"
            />
            <p className="font-semibold text-sm">{tripMember.fullName}</p>
          </button>
        );
      })}
    </div>
  );
};

export default UserSearchList;
