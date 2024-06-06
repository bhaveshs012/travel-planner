import React from "react";
import { Input, Button } from "../../components/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Login
        </h2>
        <form>
          <Input
            label="Email"
            placeholder="Enter your email"
            className="my-4"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            className="my-4"
          />
          <div className="mb-4 text-center text-sm text-gray-700">
            New User?{" "}
            <Link to="/signup">
              <span className="underline">Sign Up Here</span>
            </Link>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
