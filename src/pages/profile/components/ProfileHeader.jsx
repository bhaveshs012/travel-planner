import React from "react";
import { FaArrowRightFromBracket, FaRegCircleUser } from "react-icons/fa6";
import apiClient from "../../../api/apiClient";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await apiClient.post("/users/logout");
      dispatch(logout());
      navigate("/");
      toast.success("User Logged Out !!");
    } catch (error) {
      toast.error("Some Error Occurred !!");
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <FaRegCircleUser className="text-3xl" />
          <div className="text-xl font-semibold">
            <p>Account Preferences</p>
          </div>
        </div>
        <button
          className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center"
          title="Logout"
          onClick={handleLogout}
        >
          <FaArrowRightFromBracket className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
