import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import { PiChartLine } from "react-icons/pi";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-3 sm:px-6 md:px-10 lg:px-16 py-3 bg-[#ffffff]">
      {/* logo */}
      <h1 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
        Keen<span className="text-[#244d3f]">Keeper</span>
      </h1>

      {/* nav-items  */}

      <ul className="flex items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive ? "bg-[#244d3f] text-white" : ""} flex items-center gap-1 px-2 py-1 rounded`
          }
        >
          <IoHomeOutline></IoHomeOutline>Home
        </NavLink>

        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            `${isActive ? "bg-[#244d3f] text-white" : ""} flex items-center gap-1 px-2 py-1 rounded`
          }
        >
          <RiTimeLine></RiTimeLine> Timeline
        </NavLink>

        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            `${isActive ? "bg-[#244d3f] text-white" : ""} flex items-center gap-1 px-2 py-1 rounded`
          }
        >
          <PiChartLine></PiChartLine> Stats
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
