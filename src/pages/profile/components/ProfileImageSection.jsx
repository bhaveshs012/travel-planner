import React from "react";
import { AvatarInput } from "../../../components/Form/index";
import { FaRegTrashCan, FaPencil } from "react-icons/fa6";

//TODO: NEED TO PASS THE REACT HOOK register method to the avatar input

const ProfileImageSection = () => {
  return (
    <div className="flex space-x-4 space-y-4 gap-x-8 items-center mb-10">
      <AvatarInput
        userImage={
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/5-ted-and-tracy-Cropped.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"
        }
      />
      <div className="flex gap-y-4 flex-col">
        <button className="flex items-center justify-start space-x-4 py-2 px-4 border border-black border-1 bg-black text-white font-bold rounded focus:outline-none hover:bg-gray-900">
          <FaPencil />
          <p>Edit Image</p>
        </button>
        <button className="flex items-center justify-start space-x-4 py-2 px-4 border border-black border-1  font-bold rounded focus:outline-none">
          <FaRegTrashCan />
          <p>Remove Image</p>
        </button>
      </div>
    </div>
  );
};

export default ProfileImageSection;
