import React from "react";
import logo from "/favicon/favicon.svg";
import "./Header.css";

function Header() {
  return (
    <header className="w-full border-b-2 border-[#e6dede]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between h-24 px-4 sm:px-8">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Home"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-md"
          />
          <span className="ml-3 text-cyan-500 font-logo font-semibold text-2xl sm:text-3xl text-center sm:text-left">
            THANAFUS ARTS FEST
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;
