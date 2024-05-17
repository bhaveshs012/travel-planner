import React from "react";
import { HeaderBottom, HeaderTop } from "./components";

function ProfileHeader() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <HeaderTop />
      <HeaderBottom />
      <div className="absolute mb-12 flex justify-center items-center">
        <div className="w-32 h-32 bg-gray-400 rounded-full">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1715874318~exp=1715874918~hmac=c2f866fdb6f7806a6adc7bd2d311e095c30ada91cdff3f6ea9da1ab49c248573"
            alt="profile-pic"
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
