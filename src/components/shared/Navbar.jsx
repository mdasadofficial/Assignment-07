import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-[80%] mx-auto py-5 flex justify-between items-center">

  {/* Left Side (Logo) */}
  <div>
    <a className="text-2xl font-bold">
      <span className="text-blue-600">Keen</span>Keeper
    </a>
  </div>

  {/* Right Side (Menu) */}
  <div>
    <ul className="menu menu-horizontal gap-4">
      <li>
        <a><i className="fa-solid fa-house"></i> Home</a>
      </li>
      <li>
        <a><i className="fa-regular fa-clock"></i> Timeline</a>
      </li>
      <li>
        <a><i className="fa-solid fa-chart-line"></i> Stats</a>
      </li>
    </ul>
  </div>

</div>
  );
};

export default Navbar;