import React from "react";

function HeaderTop() {
  return (
    <div>
      <div className="flex">
        <div className="w-32 h-32 rounded-full mb-5 mx-auto">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1715874318~exp=1715874918~hmac=c2f866fdb6f7806a6adc7bd2d311e095c30ada91cdff3f6ea9da1ab49c248573"
            alt="profile-pic"
            className="h-full w-full rounded-full text-center mx-auto"
          />
        </div>
      </div>
      <div className="text-center text-xl font-bold ">Bhavesh Sengunthar</div>
      <div className=" text-center mb-4">
        A man who loves climbing mountains and beaches ...
      </div>
    </div>
  );
}

export default HeaderTop;
