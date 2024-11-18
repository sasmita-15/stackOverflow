import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS
import { fab } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="border-b-2 border-gray-300 bg-white h-16 flex justify-between items-center px-8 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center px-4">
      <i className="fa-brands fa-stack-overflow text-3xl text-orange-500 w-12 h-7"></i>
        <span className="text-xl font-medium ">Stack</span><span className="text-xl font-bold ">Overflow</span>
      </div>

      {/* Search Bar Section */}
      <div className="flex-grow max-w-xl mx-4">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Search your answers here..."
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-6 px-4">
        <span className="text-2xl cursor-pointer hover:text-orange-500">
          🔔
        </span>
        <span className="text-2xl cursor-pointer hover:text-orange-500">
          👤
        </span>
      </div>
    </header>
  );
};

export default Header;
