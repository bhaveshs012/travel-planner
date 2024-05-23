import React from 'react'

function HeaderBottom() {
  return (
    <div className="flex flex-row w-full h-3/5">
      <div className="w-full bg-gray-300 relative">
        <div className="py-2 px-12 rounded-lg inline bg-black font-medium text-sm absolute top-5 right-5 text-white">
          Follow
        </div>
        <div className="p-4 justify-center flex">
          <div className="absolute bottom-4">
            <div className="text-center text-xl font-bold ">
              Bhavesh Sengunthar
            </div>
            <div className=" text-center mb-4">
              A man who loves climbing mountains ...
            </div>
            <div className="flex gap-3">
              <div className="bg-red-300 px-8 py-2 rounded-lg text-center ">
                <p>100k</p>
                <p>Followers</p>
              </div>
              <div className="bg-red-300 px-8 py-2 rounded-lg text-center ">
                <p>10k</p>
                <p>Following</p>
              </div>
              <div className="bg-red-300 px-8 py-2 rounded-lg text-center ">
                <p>1168</p>
                <p>Posts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom