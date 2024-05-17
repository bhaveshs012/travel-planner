import React from "react";

function HeaderTop() {
  return (
    <div className="flex flex-row w-full h-2/5">
      <div className="w-full bg-gray-200 relative">
        <div className="bg-white-500 py-2 px-4 rounded-lg inline absolute bottom-5 left-5 font-medium text-sm outline-3 outline outline-gray-700">
          Edit Profile
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
