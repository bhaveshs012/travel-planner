import React, { useState } from "react";

function MainCard() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="bg-gray-200 rounded-3xl w-full flex items-center space-x-4">
      <div className="relative">
        <img
          src="src/assets/image.jpg"
          className="h-88 w-80 rounded-3xl"
          alt="Sunset in the mountains"
        />
        <button
          className={`absolute top-2 right-2 px-2 py-2 h-10 w-10 rounded-full shadow-md 
            ${isClicked ? "bg-white text-white" : "bg-white text-black"}`}
          onClick={handleClick}
        >
          <svg
            className="h-8 w-8"
            fill={isClicked ? "red" : "none"}
            viewBox="0  24 24"
            stroke={isClicked ? "red" : "currentColor"}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      <div>
        <div className="px-6 py-4 ">
          <div className="  font-bold text-xl mb-2">The Marina Lake</div>
          <div className=" inline-flex items-center">
            <svg
              className="h-4 w-4  text-black mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <p className="text-gray-700 text-base">
              Best Place to view the Sunset
            </p>
          </div>

          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            <br />
            dolore accusamus, qui molestias provident dolor neque dolorem.{" "}
            <br />
            Quibusdam, unde deserunt?
          </p>
        </div>

        <div className="pt-4 pb-2 px-1 inline-flex">
          {/* Number  */}

          <span className="inline-flex items-center bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <svg
              className="h-4 w-4  mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            120 hours<strong className="mx-2">&bull;</strong>5 nights
            <strong className="mx-2">&bull;</strong>Only nature
          </span>
        </div>

        <div> Price </div>

        {/* Dollar Sign  */}

        <div className="inline-flex">
          <svg
            className=" inline-flex h-5 w-5 "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentcolor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
            <path d="M12 3v3m0 12v3" />
          </svg>

          <p>
            {" "}
            <strong> 120 </strong>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
