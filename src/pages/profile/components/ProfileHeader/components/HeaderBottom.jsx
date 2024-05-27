import React from "react";

function HeaderBottom() {
  return (
    <div className="w-full md:text-sm">
      <div className="items-stretch hidden lg:flex bg-gray-50 justify-evenly rounded-lg shadow-md border-2 border-gray-50 px-4 py-2">
        <div className="rounded-lg text-center">
          <p>100k</p>
          <p>Followers</p>
        </div>
        <div className=" rounded-lg text-center ">
          <p>20k</p>
          <p>Following</p>
        </div>
        <div className=" rounded-lg text-center ">
          <p>298</p>
          <p>Posts</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
