import React from "react";
import coreConstants from "../../constants/core";

function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} {coreConstants.AppName}. All rights
          reserved.
        </p>
        <div>
          <a href="#" className="text-gray-300 hover:text-white ml-4">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-300 hover:text-white ml-4">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
