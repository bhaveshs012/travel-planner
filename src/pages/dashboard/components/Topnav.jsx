import React from "react";

const Topnav = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-4 pe-8 relative">
      <div className="flex my-2 lg:my-0">
        <div className="h-full my-auto me-4">
          <div className="h-6 bg-gray-400" style={{ width: "0.8px" }}></div>
        </div>
      </div>
      <div className="me-32 flex">
        <div className="h-full my-auto mx-2">
          <img
            src="src/assets/navIcons/location.png"
            className="w-5 h-5"
            alt=""
          />
        </div>
        <p className="text-sm text-gray-500"> Mumbai </p>
      </div>
      <div className="my-2 lg:my-0 ms-auto me-8">
        <div className="relative border border-gray-300 rounded-full px-2 py-2">
          <img
            src="src/assets/navIcons/notification.png"
            className="w-4 h-4"
            alt=""
          />
          <div className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></div>
        </div>
      </div>
      <div className="my-2 lg:my-0">
        <div className="h-9 w-9 overflow-hidden rounded-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1687832783818-8857f0c07ea4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your profile picture URL
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
