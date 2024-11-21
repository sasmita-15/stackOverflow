import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar w-full bg-slate-100 h-full p-4 hidden md:block">
      <nav>
        <ul>

          <li className="group relative text-lg font-medium text-gray-700 cursor-pointer transition">
            <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
              Home
            </div>
            <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
          </li>


          <li>
            <div className="group relative text-lg font-medium text-gray-700 cursor-pointer transition">
              <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                Public
              </div>
              <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
            </div>
            <ul className="ml-4">
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Questions
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Tags
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Users
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
            </ul>
          </li>

          <li>
            <div className="group relative text-lg font-medium text-gray-700 cursor-pointer transition">
              <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                Collectives
              </div>
              <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
            </div>
            <ul className="ml-4">
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Explore
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Jobs
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
            </ul>
          </li>

          <li>
            <div className="group relative text-base font-medium text-gray-700 cursor-pointer transition">
              <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                Find Jobs
              </div>
              <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
            </div>
            <ul className="ml-4">
              <li className="group relative text-sm text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Jobs
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
              <li className="group relative text-sm text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  Companies
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
            </ul>
          </li>

          
          <li>
            <div className="group relative text-lg font-medium text-gray-700 cursor-pointer transition">
              <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                Teams
              </div>
              <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
            </div>
            <ul className="ml-4">
              <li className="group relative text-base text-gray-700 cursor-pointer transition">
                <div className="hover:bg-orange-100 hover:font-bold hover:text-gray-900 pl-3 pr-1 py-2 transition-colors">
                  + Create a Team
                </div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-transparent group-hover:bg-orange-500 transition-all"></div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
