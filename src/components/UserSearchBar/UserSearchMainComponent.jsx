import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import UsersDisplay from "./UsersDisplay";
import UserSearchBar from "./UserSearchBar";
import UserSearchList from "./UserSearchList";

const UserSearchMainComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);
  return (
    <div className="p-6">
      <div className="flex flex-col h-full w-full justify-center items-center space-y-6">
        <p className="text-md underline font-bold text-center">
          Invite Trip Members
        </p>
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
