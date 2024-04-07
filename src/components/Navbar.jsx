import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="nav_bar container">
        <div className="left nav_items">PortFolio</div>
        <div className="right">
            <a href="#" className="nav_items">Home</a>
            <a href="#" className="nav_items">Experience</a>
            <a href="#" className="nav_items">Skills</a>
            <a href="#" className="nav_items">Projects</a>
            <a href="#" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
