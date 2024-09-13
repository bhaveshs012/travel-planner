import React, { useState, useEffect } from "react";
import { Input, Button } from "../../../components/Form";

const ProfileDetailsChangeForm = ({
  handleSubmit,
  errors,
  register,
  watch,
  defaultValues,
  setValue,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Set default values when the component mounts
    if (defaultValues) {
      setValue("firstName", defaultValues.firstName);
      setValue("lastName", defaultValues.lastName);
      setValue("email", defaultValues.email);
      setValue("username", "@" + defaultValues.username);
    }
  }, [defaultValues, setValue]);

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-6">
        <h1 className="text-xl font-bold">Profile Details</h1>
        <p className="text-md text-gray-400 mt-1">
          Update your profile details !!
        </p>
      </div>
      <div className="flex flex-row gap-x-8 w-full justify-center">
        <Input
          label="First Name"
          placeholder="Enter your first name"
          className="my-4 w-full"
          {...register("firstName", { required: "First name is required" })}
          error={errors.firstName?.message}
        />
        <Input
          label="Last Name"
          placeholder="Enter your last name"
          className="my-4 w-full"
          {...register("lastName", { required: "Last name is required" })}
          error={errors.lastName?.message}
        />
      </div>
      <div className="flex flex-auto justify-center items-center gap-x-8">
        <Input
          label="Email"
          placeholder="Enter your email"
          className="my-4 w-full"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Enter a valid email address",
            },
          })}
          error={errors.email?.message}
        />
        <Input
          label="Username"
          placeholder="Enter your username"
          className="my-4 w-full"
          {...register("username", { required: "username is required" })}
          error={errors.username?.message}
        />
      </div>
      <div className="flex flex-row gap-x-8 w-full justify-center">
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          className="my-4 w-full"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          error={errors.password?.message}
        />
        <Input
          label="Confirm Password"
          placeholder="Enter password again"
          type="password"
          className="my-4 w-full"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          error={errors.confirmPassword?.message}
        />
      </div>
      <Button
        className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900 disabled:bg-slate-300"
        type="submit"
        disabled={isLoading}
      >
        {!isLoading ? "Update Profile" : "Please Wait ..."}
      </Button>
    </form>
  );
};

export default ProfileDetailsChangeForm;