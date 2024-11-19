import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
  return (
    <header className="border-b-2 border-none bg-slate-100 h-16 flex justify-between items-center px-8">

      <div className="flex items-center px-4">
      <FontAwesomeIcon icon="fa-brands fa-stack-overflow h-5 w-10" />
        <span className="text-xl font-medium ">Stack</span><span className="text-xl font-bold ">Overflow</span>
      </div> 
      <div className="flex-grow max-w-xl mx-4">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Search your answers here..."
        />
      </div>
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
