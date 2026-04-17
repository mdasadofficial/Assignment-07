"use client";

import React, { useState } from "react";
import ImgLogo from "@/assets/logo.png";
import Image from "next/image";
import MyNavLink from "./shared/MyNavLink";
import { ChartNoAxesColumn, Clock3, House } from "lucide-react";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: <House className="h-5 w-5"/>,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <Clock3 className="h-5 w-5" />,
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <ChartNoAxesColumn className="h-5 w-5" />,
    },
  ];

  return (
    <nav className="bg-base-100 shadow-sm w-full">
      <div className="w-[90%] mx-auto py-4 flex justify-between items-center">

        {/* Logo */}
        <div>
          <Image src={ImgLogo} alt="Logo" width={120} height={40} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map((item, index) => (
            <MyNavLink key={index} href={item.path}>
              <span className="flex items-center gap-2">
                {item.icon}
                {item.text}
              </span>
            </MyNavLink>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-[90%] mx-auto pb-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <MyNavLink
                key={index}
                href={item.path}
                onClick={() => setOpen(false)}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.text}
                </span>
              </MyNavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
    
    
  );
};

export default Navbar;



