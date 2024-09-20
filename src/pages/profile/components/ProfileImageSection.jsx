import React from "react";
import { AvatarInput } from "../../../components/Form/index";
import { FaPencil } from "react-icons/fa6";

const ProfileImageSection = ({ userImage, register }) => {
  return (
    <div className="flex space-x-4 space-y-4 gap-x-8 items-center mb-10">
      <div className="relative group">
        <AvatarInput userImage={userImage} register={register} />
      </div>
    </div>
  );
};

export default ProfileImageSection;
