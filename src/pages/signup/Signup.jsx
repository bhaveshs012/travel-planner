import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, AvatarInput } from "../../components/Form";
import { PageHeader } from "../../components";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login, loginFailure } from "../../features/authSlice";
import apiClient from "../../api/apiClient";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  //* Redux
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  //* Toasts for Errors
  let toastId = null;
  useEffect(() => {
    if (error) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(error);
      }
    }
  }, [error]);

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    username,
    password,
    avatar,
  }) => {
    try {
      setIsLoading(true);
      const fullName = firstName + " " + lastName;
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", avatar);

      const response = await apiClient.post("/users/register", formData);

      toast.success(`${response.data.message}! Login to Continue`);
      //redirect to login
      navigate("/login");
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message || "An error occurred";
        toast.error(errorMessage); // Display the error message in a toast
        dispatch(loginFailure(errorMessage));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-8">
      <div className="border border-black border-opacity-20 p-8 rounded-lg shadow-lg w-3/5">
        <PageHeader
          className={"text-center"}
          title="Welcome to Journey Sync"
          subtitle="Register to create your first account and start exploring !!"
        />
        <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <AvatarInput register={register} />
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
              {...register("username", { required: "Username is required" })}
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
          <div className="mb-4 text-center text-sm text-gray-700">
            Already Registered?{" "}
            <Link to="/login">
              <span className="underline">Login Here</span>
            </Link>
          </div>
          <Button
            className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900 disabled:bg-slate-300"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading ? "Sign Up" : "Please Wait ..."}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
