import React from "react";
import coreConstants from "../../../constants/core";

function Hero() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
            Plan Your Next Adventure with {coreConstants.AppName}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {coreConstants.AppName} helps you organize your travel plans and
            share them with friends. Sign up now and start exploring!
          </p>
          <a
            href="#"
            className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition duration-300"
          >
            Get Started
          </a>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            className="h-auto md:max-w-lg"
            src={"src/assets/hero-image.jpg"}
            height={400}
            width={400}
            alt="Travel"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
