import React, { useState, useRef } from "react";
import AvatarPlaceholder from "/assets/avatarPlaceholder.png";

const AvatarInput = ({ register, userImage }) => {
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);
  const placeholderImage = AvatarPlaceholder;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (avatar !== reader.result) {
          setAvatar(reader.result);
          register("avatar", { value: file });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <label className="w-48 h-48 cursor-pointer">
        <div className="w-48 h-48 rounded-full overflow-hidden border border-gray-300">
          <img
            src={avatar || userImage || placeholderImage}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            handleAvatarChange(e);
          }}
          className="hidden"
          ref={fileInputRef}
        />
      </label>
    </div>
  );
};

export default AvatarInput;
