import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
    <div className="headerItemContainer">
      <div className="leftHeaderItems">
        <img src="https://th.bing.com/th/id/OIP.iSzSE29bFxAhpMUwRrcPagHaHa?pid=ImgDet&rs=1" alt="logo" height={50}/>
      </div>

      <NavLink 
        to="/" 
        style={({ isActive }) => ({color: isActive ? "#fff" : "grey",})} 
      >
        <i className="fas fa-border-all"></i>
        <span>Cheatsheets</span>
      </NavLink>
    </div>

    <div className="headerItemContainer">
      <div className="profilImage">
        <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" />
      </div>
    </div>
  </div>
  )
}

export default Navbar
