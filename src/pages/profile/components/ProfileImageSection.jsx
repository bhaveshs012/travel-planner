import React from "react";
import { AvatarInput } from "../../../components/Form/index";
import { FaPencil } from "react-icons/fa6";

const ProfileImageSection = ({ userImage, register }) => {
  return (
    <div className="flex space-x-4 space-y-4 gap-x-8 items-center mb-10">
      <div className="relative group">
        <AvatarInput userImage={userImage} register={register} />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-50 rounded-full">
          <FaPencil className="text-white text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProfileImageSection;
