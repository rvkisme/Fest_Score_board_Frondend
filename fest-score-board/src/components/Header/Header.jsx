import React from "react";
import logo from "./download.png";
import './Header.css';
function Header() {
  return (
    <div className="w-full h-16 flex items-center font-bold border-b-2 border-[#e6dede] pt-[10px] text-3xl justify-items-center">
      <a href="/" className="flex items-center">
        <img
          src={logo}
          alt="Home"
          className="w-[42px] rounded-[5px] ml-[10px] pr-[3px]"
        />
        <span className="ml-2 font-custom">THANAFUS ARTS FEST</span>
      </a>
    </div>
  );
}

export default Header;
