import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl">YouTube Clone</div>
      <input
        type="text"
        placeholder="Search"
        className="p-2 rounded w-1/2"
      />
      <div className="text-white">Menu</div>
    </header>
  );
}

export default Header;
