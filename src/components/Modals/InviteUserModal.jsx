import React, { useImperativeHandle, useRef } from "react";
import UserSearchMainComponent from "../UserSearchBar/UserSearchMainComponent";
import { FaXmark } from "react-icons/fa6";
import { Button } from "../Form";

const InviteUserModal = React.forwardRef(
  ({ CTA, CTAFunction, isCTADisabled, extraInfo = false }, ref) => {
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
        <UserSearchMainComponent extraInfo={extraInfo} />
        {CTA && (
          <div className="p-4">
            <Button
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900"
              onClick={CTAFunction}
              disabled={isCTADisabled}
            >
              {CTA}
            </Button>
          </div>
        )}
      </dialog>
    );
  }
);

export default InviteUserModal;
