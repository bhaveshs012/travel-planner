import React from "react";
import { ProfileHeader } from "./components";
import PhotoGridView from "./components/PhotoGridView/PhotoGridView";

function Profile() {
  return (
    <div className="h-screen mx-auto py-4 px-4 justify-start">
      <div className="h-3/5">
        <ProfileHeader />
      </div>
      <div className="flex h-5/6 gap-3 mt-4">
        <div className="flex-1 bg-green-300 text-center p-4">
          <PhotoGridView photos={[]} />
        </div>
        <div className="flex-1 bg-green-300 text-center p-4">Videos</div>
      </div>
    </div>
  );
}

export default Profile;
