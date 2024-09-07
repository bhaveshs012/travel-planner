import React from "react";
import UserTag from "./UserTag";
import { useSelector } from "react-redux";
const UsersDisplay = () => {
  const tripMembers = useSelector((state) => state.tripPlan.tripMembers);
  return (
    <div className="flex w-full flex-wrap gap-4 justify-center bg-gray-50 p-4 rounded-lg">
      {tripMembers?.map((user, index) => {
        return <UserTag key={index} user={user} />;
      })}
    </div>
  );
};

export default UsersDisplay;
