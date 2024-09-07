import React, { useImperativeHandle, useRef } from "react";
import UserSearchMainComponent from "../UserSearchBar/UserSearchMainComponent";
import { FaXmark } from "react-icons/fa6";

const InviteUserModal = React.forwardRef(({ props }, ref) => {
  //* Modal Related ::
  const dialogRef = useRef(null);
  useImperativeHandle(ref, () => ({
    openModal: () => dialogRef.current.showModal(),
    closeModal: () => dialogRef.current.close(),
  }));

  //* Form Setup
  return (
    <dialog ref={dialogRef} className="w-1/2 h-auto p-6 rounded-lg shadow-lg">
      <div className="flex justify-end">
        <FaXmark onClick={() => dialogRef.current.close()} />
      </div>
      <UserSearchMainComponent />
    </dialog>
  );
});

export default InviteUserModal;
