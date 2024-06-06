import React from "react";

const AvatarRow = () => {
  const avatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
  ];

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
