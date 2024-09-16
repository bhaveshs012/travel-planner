import React from "react";
import { Button } from "../../../components/Form";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";

const NotificationTile = ({ notification, refetch }) => {
  const handleAccept = async () => {
    try {
      const response = await apiClient.post(
        `/users/${notification.invitationId}/acceptInvite`
      );
      refetch();
      toast.success("Invitation Accepted Successfully !!");
    } catch (error) {
      const errorMessage =
        error.response.data.message || "Something went wrong !!";
      refetch();
      toast.error(errorMessage);
    }
  };

  const handleDecline = async () => {
    try {
      const response = await apiClient.delete(
        `/users/${notification.invitationId}/declineInvite`
      );
      toast.warning("Invitation Declined Successfully !!");
    } catch (error) {
      const errorMessage =
        error.response.data.message || "Something went wrong !!";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="shadow-md flex p-4 rounded-lg space-x-6 items-center">
      <img
        src="https://i.pravatar.cc/150?img=3"
        alt="profileImage"
        className="h-14 w-14 rounded-lg"
      />
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col space-y-1">
          <p>
            <span className="font-semibold text-sm text-white bg-black p-1 rounded-md">
              @{notification.inviter.username}
            </span>{" "}
            <span className="font-bold">{notification.inviter.fullName}</span>{" "}
            has invited you to join a trip !!
          </p>
          <p className="font-semibold">{notification.tripDetails.tripName}</p>
          <p className="text-gray-500 text-sm">
            {notification.tripDetails.tripDesc}
          </p>
        </div>
        <div className="flex space-x-4 h-10 ml-auto">
          <Button onClick={handleAccept}>Accept</Button>
          <button
            className="flex space-x-4 justify-center items-center px-4 py-2 border-2 border-black text-black text-sm font-semibold rounded"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationTile;
