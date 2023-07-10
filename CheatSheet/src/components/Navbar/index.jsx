import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navContainer">
    <div class="headerItemContainer">
      <div class="leftHeaderItems">
        <img src="https://th.bing.com/th/id/OIP.iSzSE29bFxAhpMUwRrcPagHaHa?pid=ImgDet&rs=1" alt="logo" height={50}/>
      </div>

      <NavLink 
        to="/" 
        exact 
        style={({ isActive }) => ({color: isActive ? "#fff" : "grey",})} 
      >
        <i class="fas fa-border-all"></i>
        <span>Cheatsheets</span>
      </NavLink>
    </div>

    <div class="headerItemContainer">
      <div class="profilImage">
        <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" />
      </div>
    </div>
  </div>
  )
}

export default Navbar
