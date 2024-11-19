import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar w-full bg-gray-100 shadow-md h-full p-4 hidden md:block">
      <nav className>
        <ul className="space-y-4">
          <li className="text-lg font-semibold text-gray-700 hover:text-orange-600 cursor-pointer transition-colors">
            Home
          </li>
          <li className="text-lg font-semibold text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
            Questions
          </li>
          <li className="text-lg font-semibold text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
            Tags
          </li>
          <li className="text-lg font-semibold text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
            Users
          </li>
          <li className="text-lg font-semibold text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
            Jobs
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
