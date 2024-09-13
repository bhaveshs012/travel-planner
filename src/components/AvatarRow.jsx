import React from "react";

const AvatarRow = ({ members }) => {
  return (
    <div className="ml-2 flex space-x-0">
      {members.map((user, index) => (
        <div key={index} className="relative group">
          <img
            src={user.image || user.avatar}
            alt={`Avatar ${index + 1}`}
            className="w-9 h-9 rounded-full border-2 border-white object-cover"
          />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {user.name || user.fullName}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarRow;
