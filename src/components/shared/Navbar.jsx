import React from 'react';

const Navbar = () => {
  return (
         <div className="navbar bg-base-100 shadow-sm w-[80%] mx-auto py-5 ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><a className='text-2xl font-bold'>Keen</a>Keeper</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li> <a> <i class="fa-solid fa-house"></i>Home</a></li>
      <li><a><i class="fa-regular fa-clock"></i>TimeLine</a></li>
      <li>
        
          <summary><i class="fa-solid fa-chart-line"></i>Stats</summary>
          
       
      </li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;