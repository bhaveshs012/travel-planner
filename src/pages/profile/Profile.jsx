import React from "react";
import {
  ProfileHeader,
  ProfileImageSection,
  ProfileDetailsChangeForm,
} from "./components/index";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { loginFailure, setUser } from "../../features/authSlice";
import apiClient from "../../api/apiClient";
import LoadingScreen from "../common/LoadingScreen";
import ErrorScreen from "../common/ErrorScreen";

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const dispatch = useDispatch();

  //* Get the current user
  const fetchCurrentUser = async () => {
    const response = await apiClient.get(`/users/current-user`);
    return response.data.data;
  };

  const {
    data: currentUser,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["fetchCurrentUser"],
    queryFn: fetchCurrentUser,
    refetchOnWindowFocus: false,
    onSuccess: (data) => dispatch(setUser(data)), // Store the fetched user in Redux
    onError: (err) => dispatch(loginFailure(err.message)),
  });

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  // Example pre-fetched data
  const defaultValues = {
    firstName: currentUser.fullName?.split(" ")[0] || "",
    lastName: currentUser.fullName?.split(" ")[1] || "",
    email: currentUser.email || "",
    username: currentUser.username || "",
    prevImageUrl: currentUser.avatar || "",
  };

  return (
    <div className="p-8 gap-y-8 space-y-8">
      <ProfileHeader />
      <div className="w-2/3">
        <ProfileDetailsChangeForm
          register={register}
          handleSubmit={handleSubmit}
          currentUser={currentUser}
          errors={errors}
          refetch={refetch}
          setValue={setValue}
          defaultValues={defaultValues}
        />
      </div>
    </div>
  );
}

export default Profile;
