import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="flex -z-0">
      <nav className="fixed flex justify-between items-center bg-blue-400 p-2 h-20 w-full">
      <Logo/>
        <ul className="list-none flex gap-2">
          <li className="text-white p-1 items-center">
            <a href="#home">Home</a>
          </li>
          <li className="text-white p-1 items-center">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-white p-1 items-center">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
