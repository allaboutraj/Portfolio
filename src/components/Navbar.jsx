import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

  return (
    <>
      <div className="nav_bar container"
      data-aos="fade-down"
      data-aos-duration="1000"
      >
        <div className="left nav_items">PortFolio</div>
        {/* Hamberger Designing */}
        {/* <div className = "dropdown-menu text-right">
                <div className="bars">
                  <GiHamburgerMenu />
                </div>
                <div className ="dropdown-list nav-menu">
                <IoCloseSharp />
                    <ul className = "no-list-style">
                        <li >
                            <a href="#"> Home </a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#skills"> Skills </a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    </div>
             </div> */}
            {/* Hamberger Design Over */}

        <div className="right">
            <a href="#home" className="nav_items">Home</a>
            <a href="#experience" className="nav_items">Experience</a>
            <a href="#skills" className="nav_items">Skills</a>
            <a href="#projects" className="nav_items">Projects</a>
            <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar;
