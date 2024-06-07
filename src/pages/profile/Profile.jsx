import React from "react";
import {
  ProfileHeader,
  Tabs,
} from "./components";

function Profile() {
  return (
    <div className="flex flex-row ">
      <div className="w-full flex flex-col">
        <ProfileHeader />
        <Tabs />
      </div>
    </div>
  );
}

export default Profile;
