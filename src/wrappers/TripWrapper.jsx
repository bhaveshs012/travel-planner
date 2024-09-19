import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { LoadingScreen, PageNotFound } from "../pages";
import apiClient from "../api/apiClient";

const TripWrapper = ({ children }) => {
  const { tripId } = useParams();

  const validateTripId = async () => {
    const response = await apiClient.get(`/tripPlan/${tripId}/validateTripId`);
    return response.data.data;
  };

  // Query to validate the tripId
  const {
    data: tripIdValid,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["validateTripId", tripId],
    queryFn: () => validateTripId(tripId),
    enabled: !!tripId,
  });

  if (isLoading) return <LoadingScreen />;

  if (error || !tripIdValid) return <PageNotFound />;

  return children;
};

export default TripWrapper;
