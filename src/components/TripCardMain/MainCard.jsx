

import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";

function MainCard() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="bg-gray-100 w-2/3 mx-auto rounded overflow-hidden shadow-lg flex"> {/* Changed to flex */}
      <div className="w-1/2 relative"> {/* Set width to 1/2 */}
        <img
          src="src/assets/Landscape_image.jpg"
          className="rounded-3xl w-full" /* Set image width to full */
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
            viewBox="0 24 24"
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

      <div className="w-1/2 px-6 py-4"> {/* Set width to 1/2 */}
        <div className="font-bold text-xl mb-2">Trip Name</div>
        <div className="inline-flex items-center mb-2">
          <svg
            className="h-4 w-4 text-black mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <GrLocation size={23} />
          </svg>
          <p className="text-gray-700 text-base">
            Best Place to visit in India
          </p>
        </div>

        <p className="text-gray-700 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          <br />
          dolore accusamus, qui molestias provident dolor neque dolorem.{" "}
          <br />
          Quibusdam, unde deserunt?
        </p>

        <div className="pt-4 pb-2 px-1 inline-flex mb-4">
          <span className="inline-flex items-center bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
            >
              <GrLocation size={23} />
            </svg>
            Dehli
          </span>

          <span className="inline-flex items-center bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
            >
              <GrLocation size={23} />
            </svg>
            Mumbai
          </span>

          <span className="inline-flex items-center bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
            >
              <GrLocation size={23} />
            </svg>
            Kerla
          </span>

          <span className="inline-flex items-center bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <svg
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
            >
              <GrLocation size={23} />
            </svg>
            Shimla
          </span>



        </div>



        <div className="flex flex-row space-x-10 "> {/* Added space-x-4 to control space */}
          <div className="flex flex-row justify-between space-x-2 ">
            <div className="mb-1">Price</div> {/* Reduced margin */}
            <div className="flex items-center">
              <svg
                className="h-5 w-5 mr-1"
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
                <strong>120</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between space-x-2 ">
            <div className="mb-1">Duration</div> {/* Reduced margin */}
            <p>
              <strong>5 Days </strong></p> {/* Example duration text */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
