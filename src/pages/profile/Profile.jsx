import React from "react";
import {
  ProfileHeader,
  ProfileImageSection,
  ProfileDetailsChangeForm,
} from "./components/index";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
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
    watch,
  } = useForm();

  const user = useSelector((state) => state.auth.user);
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
  } = useQuery({
    queryKey: ["fetchCurrentUser", user],
    queryFn: fetchCurrentUser,
    enabled: !user, // Fetch only if user is not already in Redux state
    onSuccess: (data) => dispatch(setUser(data)), // Store the fetched user in Redux
    onError: (err) => dispatch(loginFailure(err.message)),
  });

  const activeUser = user || currentUser;

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  // Example pre-fetched data
  const defaultValues = {
    firstName: activeUser.fullName?.split(" ")[0] || "",
    lastName: activeUser.fullName?.split(" ")[1] || "",
    email: activeUser.email || "",
    username: activeUser.username || "",
  };

  return (
    <div className="p-8 gap-y-8 space-y-8">
      <ProfileHeader />
      <ProfileImageSection userImage={activeUser.avatar} register={register} />
      <div className="w-2/3">
        <ProfileDetailsChangeForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          watch={watch}
          setValue={setValue}
          defaultValues={defaultValues}
        />
      </div>
    </div>
  );
}

export default Profile;
