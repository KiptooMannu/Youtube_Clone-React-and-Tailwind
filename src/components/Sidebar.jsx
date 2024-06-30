import React from 'react';

function Sidebar() {
  return (
    <aside className="bg-white text-gray-800 w-64 p-4 hidden md:block shadow-md">
      <ul>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">Home</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer" >Trending</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">Subscriptions</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
