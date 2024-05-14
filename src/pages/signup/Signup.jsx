import React from "react";
import { Input, Button } from "../../components/Form";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Sign Up
        </h2>
        <form>
          <Input label="Name" placeholder="Enter your name" className="my-4" />
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
          <Input
            label="Confirm Password"
            placeholder="Enter password again"
            type="password"
            className="my-4"
          />
          <div className="mb-4 text-center text-sm text-gray-700">
            Already Registered?{" "}
            <Link to="/login">
              <span className="underline">Login Here</span>
            </Link>
          </div>
          <Button
            className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
