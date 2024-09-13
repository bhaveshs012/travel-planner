import React, { useImperativeHandle, useRef, useEffect } from "react";
import UserSearchMainComponent from "../UserSearchBar/UserSearchMainComponent";
import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { setTripMembers } from "../../features/tripPlanSlice";
import apiClient from "../../api/apiClient";

const InviteUserModal = React.forwardRef(
  ({ fromTripDashboard = false, tripId }, ref) => {
    //* Modal Related ::
    const dialogRef = useRef(null);
    useImperativeHandle(ref, () => ({
      openModal: () => dialogRef.current.showModal(),
      closeModal: () => dialogRef.current.close(),
    }));

    const dispatch = useDispatch();

    // Fetching invited and added members via API
    const getInvitedAndAddedMembers = async () => {
      const response = await apiClient.get(
        `tripPlan/${tripId}/getInvitedAndAddedMembers`
      );
      return response.data.data;
    };

    // Using React Query to fetch data conditionally
    const { data, error, isLoading } = useQuery({
      queryKey: ["getInvitedAndAddedMembers", tripId],
      queryFn: getInvitedAndAddedMembers,
      enabled: fromTripDashboard, // Only run the query when fromTripDashboard is true
    });

    // Handling API response and dispatching data to Redux
    useEffect(() => {
      if (data) {
        dispatch(setTripMembers(data));
      }
    }, [data, dispatch]);

    if (isLoading) return <div>Loading ...</div>;
    if (error) return <div>Error: {error.message}</div>;

    //* Form Setup
    return (
      <dialog ref={dialogRef} className="w-1/2 h-auto p-6 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <FaXmark onClick={() => dialogRef.current.close()} />
        </div>
        <UserSearchMainComponent />
      </dialog>
    );
  }
);

export default InviteUserModal;
