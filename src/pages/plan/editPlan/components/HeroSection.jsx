import React, { useRef, useState } from "react";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { setTripPlan } from "../../../../features/tripPlanSlice";
import apiClient from "../../../../api/apiClient";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { InviteUserModal } from "../../../../components";
import LoadingScreen from "../../../common/LoadingScreen";
import ErrorScreen from "../../../common/ErrorScreen";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import coverImage from "/assets/tripCoverImages/4.png";

const HeroSection = React.forwardRef(({ props }, ref) => {
  const { tripId } = useParams();

  //* Redux ::
  const tripPlan = useSelector((state) => state.tripPlan);
  const dispatch = useDispatch();

  //* Modal Setup
  const inviteUserModalRef = useRef(null);
  const handleOpenUserModal = (e) => {
    e.preventDefault();
    inviteUserModalRef.current.openModal();
  };

  //* Fetch Trip Details from backend
  const getTripDetailsById = async () => {
    const response = await apiClient.get(`/tripPlan/${tripId}/getTripPlan`);
    dispatch(setTripPlan(response.data.data));
    return response.data.data;
  };

  //* Calling it only on initial Load
  const { data, error, isLoading } = useQuery({
    queryKey: ["getTripDetailsById", tripId],
    queryFn: getTripDetailsById,
  });

  //* For Saving Users on Invite
  const [isSaving, setIsSaving] = useState(false);
  const queryClient = useQueryClient();
  const handleInviteMembers = async () => {
    try {
      setIsSaving(true);
      const tripMembersIds = tripPlan.tripMembers.map(
        (tripMember) => tripMember.userId
      );
      const response = await apiClient.patch(`/tripPlan/${tripId}`, {
        tripMembers: tripMembersIds,
      });
      // On save we refetch the trip Details
      toast.success("Users Invited Successfully !!");
      inviteUserModalRef.current.closeModal();
      queryClient.refetchQueries(["getTripDetailsById", tripId]);
    } catch (error) {
      toast.error("Some error occurred !!");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  return (
    <div className="relative h-auto w-full" {...props} ref={ref}>
      <InviteUserModal
        ref={inviteUserModalRef}
        fromTripDashboard={true}
        tripId={tripId}
        CTA={"Done"}
        isCTADisabled={isSaving}
        CTAFunction={handleInviteMembers}
        extraInfo={true}
      />

      <div className="h-auto w-full">
        <img
          src={coverImage}
          alt="Cover Image"
          className="w-full h-64 object-fill"
        />
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
              handleOpenUserModal(e);
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
});

export default HeroSection;
