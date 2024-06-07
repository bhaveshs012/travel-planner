import React, { useState } from "react";

function ProfileHeader() {
  const [doesFollow, setDoesFollow] = useState(false);

  function toggleFollow() {
    setDoesFollow((prev) => !prev);
  }

  return (
    <div className="mt-12">
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start ">
        <div className="h-36 w-36 md:mr-8 rounded-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1687832783818-8857f0c07ea4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your profile picture URL
            alt="Profile"
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <div className="text-center md:text-left">
          <div className="flex flow-row">
            <h2 className="text-4xl font-medium">Tracy McConnel</h2>
            <button
              onClick={toggleFollow}
              className="bg-gray-200 mx-4 rounded-md px-4 py-2 text-sm cursor-pointer"
            >
              {doesFollow ? "Following" : "Follow"}
            </button>
          </div>
          <p className="my-2">
            Hi, I'm Tracy McConnell! I love traveling to new places, immersing
            myself in local cultures, and discovering hidden gems.
          </p>
          <div className="my-4 flex flex-col md:flex-row">
            <p className="text-center md:text-left content-center">
              30K Followers | 10K Following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
