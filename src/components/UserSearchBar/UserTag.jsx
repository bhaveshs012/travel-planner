import React from "react";
import { useDispatch } from "react-redux";
import { removeTripMember } from "../../features/tripPlanSlice";

const UserTag = ({ user }) => {
  const dispatch = useDispatch();
  function removeUserFromTrip(e, tripMember) {
    e.preventDefault();
    dispatch(removeTripMember(tripMember));
  }
  return (
    <div
      className={`px-3 py-2 bg-gray-100 rounded-3xl flex items-center space-x-2 h-10`}
    >
      <img
        src={user.image || user.avatar}
        alt="userImage"
        className="rounded-full h-5 w-5"
      />
      <p className="font-semibold text-sm">{user.fullName}</p>
      <button
        onClick={(e) => removeUserFromTrip(e, user)}
        className="flex justify-center items-center rounded-full text-center text-xs text-red-100 p-1 w-4 h-4 bg-red-500 font-semibold"
      >
        X
      </button>
    </div>
  );
};

export default UserTag;
