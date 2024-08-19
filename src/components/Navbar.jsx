import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/Portfolio"
        className="h-10 w-10 rounded-lg bg-white
            flex items-center justify-center shadow-md font-bold
        "
      >
        <p className="blue-gradient_text">CS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
