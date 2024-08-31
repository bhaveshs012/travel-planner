import React from "react";

const AvatarRow = ({ totalMembers }) => {
  const avatars = [];
  for (let index = 1; index <= totalMembers; index++) {
    avatars[index] = `https://i.pravatar.cc/150?img=${index}`;
  }
  return (
    <div className="flex -space-x-4">
      {avatars.map((avatar, index) => (
        <div key={index} className="relative w-9 h-9">
          <img
            src={avatar}
            alt={`Avatar ${index + 1}`}
            className="w-full h-full rounded-full border-2 border-white object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarRow;
