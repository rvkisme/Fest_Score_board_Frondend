import React from 'react'
import './Header.css'
import logo from "@/assets/download.png"
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='w-full h-16 bg-custom text-b;ack flex items-center justify-center font-bold'>
      Fest Score Board
      <a href="/">
            <img src={logo} alt="Home" style={{ width: "20px"}} />
            Home
          </a>
    </div>
  )
}

export default Header
