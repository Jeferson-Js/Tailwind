import React from "react";
import Logo from "./Logo";
import Hamburguer from "./Hamburguer";

const Navbar = () => {
  return (
    <header className="flex -z-0">
      <nav className="fixed flex justify-between items-center bg-blue-400 p-2 h-20 w-full">
      <Logo/>
      <Hamburguer />
        <ul className="list-none sm:flex gap-2 hidden">
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
