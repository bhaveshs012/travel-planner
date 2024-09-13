import React from "react";
import {
  ProfileHeader,
  ProfileImageSection,
  ProfileDetailsChangeForm,
} from "./components/index";
import { useForm } from "react-hook-form";

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  // Example pre-fetched data
  const defaultValues = {
    firstName: "Tracy",
    lastName: "McConnel",
    email: "tracy.m@himym.com",
    username: "tracy_the_wife",
  };

  return (
    <div className="p-8 gap-y-8 space-y-8">
      <ProfileHeader />
      <ProfileImageSection />
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
