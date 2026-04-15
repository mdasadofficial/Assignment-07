import React from 'react';
import ImgLogo from '../../assets/logo.png'
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-[80%] mx-auto py-5 flex justify-between items-center">

      {/* Left Side (Logo) */}
      <div>
        <Image src={ImgLogo} alt='Nav LogoImg'/>
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