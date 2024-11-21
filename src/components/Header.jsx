import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faTrophy,faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Header = ({ setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="border-none bg-slate-100 w-full h-16 flex justify-between items-center pt-4">
      <div className="flex items-center justify-center h-full w-1/6 ">
        <FontAwesomeIcon icon={faStackOverflow} className="h-8 w-8 pb-2 pr-1 text-orange-400" />
        <span className="text-xl font-medium">Stack</span>
        <span className="text-xl font-bold">Overflow</span>
      </div>

      <div className="flex w-3/6 h-full pl-8 ">

        <div className="w-9/12 relative flex items-center">
          <input
            type="text"
            onChange={handleSearchChange}
            placeholder="Search Your Answers Here..."
            className="w-[600px] px-4 py-2 pr-10 text-sm border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-3 h-4 w-4 text-orange-400"
          />
        </div>;
        <a href="#" className="w-3/12 text-sm font-medium text-gray-700 hover:text-orange-500 flex items-center justify-center">
          Products
        </a>
      </div>

      <div className="flex items-center justify-aroundw-2/6 h-full p-4 bg-slate-100">
        <div className="flex items-center space-x-16 text-gray-500">
          <FontAwesomeIcon icon={faBell} className="text-xl hover:text-orange-400 transition" />
          <FontAwesomeIcon icon={faTrophy} className="text-xl hover:text-orange-400 transition" />
          <FontAwesomeIcon icon={faUserCircle} className="text-xl hover:text-orange-400 transition" />
          <img
            src="https://via.placeholder.com/30"
            alt="Profile"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
        </div>
      </div>

    </header>
  );
};

export default Header;
