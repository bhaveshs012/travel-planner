import React from "react";
import { FaBell } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

const ProfileHeader = () => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <FaRegCircleUser className="text-3xl" />
          <div className="text-xl font-semibold">
            <p>Account Preferences</p>
          </div>
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <FaBell className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
