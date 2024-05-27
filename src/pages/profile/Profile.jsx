import React from "react";
import { ProfileHeader, PhotoGridView, VideoGridView } from "./components";

function Profile() {
  return (
    <div className="h-screen flex w-screen">
      <div className="w-1/4 p-4 flex justify-center">
        {/* First Column */}
        <ProfileHeader />
      </div>
      {/* Second Column */}
      <div className="w-3/4 p-4 overflow-scroll">
        <div className="p-4 mb-10 bg-gray-50  rounded-lg shadow-md">
          <PhotoGridView title={"Latest Trip"} />
        </div>
        <div className="p-4 mb-4 bg-gray-50  rounded-lg shadow-md">
          <VideoGridView title={"Videos"} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
