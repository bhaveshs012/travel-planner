import React from "react";
import { PageHeader } from "../../components";
import { useQuery } from "@tanstack/react-query";
import NotificationTile from "./components/NotificationTile";
import apiClient from "../../api/apiClient";
import LoadingScreen from "../common/LoadingScreen";
import ErrorScreen from "../common/ErrorScreen";

const Notifications = () => {
  const fetchAllInvitations = async () => {
    const response = await apiClient.get(`/users/getAllInvitationsForUser`);
    return response.data.data;
  };

  const {
    data: invitations,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["fetchAllInvitations"],
    queryFn: fetchAllInvitations,
  });

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <div className="w-full p-8 space-y-6">
      <PageHeader
        title={"Notifications"}
        subtitle={"View all your trip invites here !!"}
      />
      {invitations.length === 0 ? (
        <div className="text-center p-4">
          <p className="text-lg font-semibold">You are all caught up</p>
          <p className="text-md text-gray-400">
            No pending invitations !! Happy travelling 😁
          </p>
        </div>
      ) : (
        invitations.map((notification, index) => (
          <NotificationTile notification={notification} refetch={refetch} />
        ))
      )}
    </div>
  );
};

export default Notifications;
