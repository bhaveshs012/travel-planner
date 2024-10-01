import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

const InfoBox = ({ fromLogin = false }) => {
  return (
    <div
      className="flex items-center p-4 mb-4 text-sm text-gray-700 bg-yellow-100 border border-yellow-300 rounded-lg"
      role="alert"
    >
      <FaCircleInfo
        className={`${fromLogin ? "h-14 w-14" : "h-8 w-8"} mr-3`}
        aria-hidden="true"
      />
      <div>
        <span className="font-medium">Demo Credentials:</span> This is a demo
        application. If you are a recruiter visiting, please proceed to login
        using the following credentials to access the features:
        <br />
        <strong>Email: test@email.com</strong>
        <br />
        <strong>Password: Test@123</strong>
      </div>
    </div>
  );
};

export default InfoBox;
