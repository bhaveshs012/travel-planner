import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from "../../components/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, loginFailure } from "../../features/authSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";

const Login = () => {
  //* Pre requisites for React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  //* Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { error } = useSelector((state) => state.auth);

  const fromRoute = location.state?.from?.pathname || "/dashboard";

  //* Toast Ref for preventing multiple toasts
  const toastIdRef = useRef(null);

  //* Toast for Errors
  useEffect(() => {
    if (error && !toast.isActive(toastIdRef.current)) {
      toastIdRef.current = toast.error(error);
    }
  }, [error]);

  const onSubmit = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const response = await apiClient.post("/users/login", {
        email,
        password,
      });
      dispatch(login(response.data.data.user));
      navigate(fromRoute, { replace: true });
      toast.success("User Logged In !!");
    } catch (error) {
      const errorMessage = error.response?.data.message || "An error occurred";
      toast.error(errorMessage);
      dispatch(loginFailure(errorMessage));
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
          <Button
            className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900 disabled:bg-slate-300"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading ? "Login" : "Please Wait ..."}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
