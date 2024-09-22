import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import UsersDisplay from "./UsersDisplay";
import UserSearchBar from "./UserSearchBar";
import UserSearchList from "./UserSearchList";

const UserSearchMainComponent = ({ extraInfo }) => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);
  return (
    <div className="p-6">
      <div className="flex flex-col h-full w-full justify-center items-center space-y-6">
        <p className="text-md underline font-bold text-center">
          Invite Trip Members
        </p>
        {extraInfo && (
          <div className="flex space-x-6 justify-start bg-gray-50 rounded-md w-full shadow-sm p-4">
            <div className="flex space-x-2 items-center">
              <div className="bg-green-100 w-4 h-4 rounded-full"></div>
              <p className="text-sm font-medium">Member</p>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="bg-gray-100 w-4 h-4 rounded-full"></div>
              <p className="text-sm font-medium">Invited</p>
            </div>
          </div>
        )}
        <UsersDisplay />
        <UserSearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <UserSearchList searchTerm={debouncedValue} />
      </div>
    </div>
  );
};

export default UserSearchMainComponent;
