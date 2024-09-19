import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../../api/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { addTripMember } from "../../features/tripPlanSlice";

const UserSearchList = ({ searchTerm }) => {
  //* Redux States
  const dispatch = useDispatch();
  const tripMembersInState = useSelector((state) => state.tripPlan.tripMembers);

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
      {tripMembers.filteredMembers.map((tripMember, index) => {
        const isDisabled =
          tripMembersInState.some(
            (member) => member.userId === tripMember.userId
          ) || tripMember.userId === tripMembers.currentUserId;

        return (
          <button
            key={index}
            onClick={(e) => addUserToTrip(e, tripMember)}
            className={`flex space-x-4 p-2 rounded-lg ${
              isDisabled ? "bg-gray-100 cursor-not-allowed" : "bg-gray-100"
            }`}
            disabled={isDisabled} // Disable button if user is a member or invited
          >
            <img
              src={tripMember.image}
              alt="userImage"
              className="rounded-full h-5 w-5"
            />
            <p
              className={`font-semibold text-sm ${
                isDisabled ? "text-gray-500" : "text-black"
              }`}
            >
              {tripMember.fullName}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default UserSearchList;
