import React from "react";
import { Input, Button } from "../../components/Form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login, loginFailure } from "../../features/authSlice";
import { useForm } from "react-hook-form";
import ApiConstants from "../../constants/apiConstants";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Login() {
  //* Pre requisites for React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  //* Redux
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  //* Toasts for Errors
  let toastId = null;
  useEffect(() => {
    if (error) {
      if (!toast.isActive(toastId)) {
        toastId = toast.error(errorMessage);
      }
    }
  }, [error]);

  const onSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${ApiConstants.baseUrl}/users/login`, {
        email,
        password,
      });
      dispatch(login(response.data.data.user));
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message || "An error occurred";
        toast.error(errorMessage); // Display the error message in a toast
        dispatch(loginFailure(errorMessage)); // Optionally dispatch an action to store the error in Redux
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response from the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            placeholder="Enter your email"
            className="my-4"
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
            label="Password"
            placeholder="Enter your password"
            type="password"
            className="my-4"
            {...register("password", {
              required: "Password is required",
            })}
            error={errors.password?.message}
          />
          <div className="mb-4 text-center text-sm text-gray-700">
            New User?{" "}
            <Link to="/signup">
              <span className="underline">Sign Up Here</span>
            </Link>
          </div>
          <Button type="submit" disabled={isLoading}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
