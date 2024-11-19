import React from "react";

const RightSidebar = () => {
  return (
    <div className="w-80 bg-gray-50 border-l border-gray-200 p-4">
      
      <div className="mb-6">
        <h3 className="text-lg font-bold  text-gray-700 mb-4">The Overflow Blog</h3>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3 text-sm">
            <div>
                x
            </div>
            <span >The unexpected benefits of explaining to others</span>
          </li>
          <li className="flex items-start space-x-3 text-sm">
            <div>
              x
            </div>
            <span>Podcast 354: Building for AR with Niantic Labs Reality SDK</span>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Featured and Meta</h3>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <div>
              
            </div>
            <span className="text-sm">Meta release of collectives on Stack Overflow</span>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Hot Meta Posts</h3>

        <p className="text-sm text-gray-500">Add posts as needed.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Custom Filter</h3>
        <p className="text-sm text-gray-500">Add filters as needed.</p>
      </div>
    </div>
  );
};

export default RightSidebar;
