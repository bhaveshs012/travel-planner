import React from "react";
import { ProfileHeader, PhotoGridView, VideoGridView } from "./components";

function Profile() {
  return (
    <div className="h-screen mx-auto py-4 px-4 justify-start">
      <div className="h-3/5">
        <ProfileHeader />
      </div>
      <div className="flex h-5/6 gap-3 mt-4">
        <div className="flex-1 bg-blue-50 text-center p-4 mb-4 rounded-lg">
          <PhotoGridView />
        </div>
        <div className="flex-1 bg-blue-50 text-center p-4 mb-4 rounded-lg">
          <VideoGridView />
        </div>
      </div>
    </div>
  );
}

export default Profile;
