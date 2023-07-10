import React from "react";
import "./SideBar.css"
import { NavLink } from "react-router-dom";


function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <NavLink       
          to="/github" 
          style={({ isActive }) => ({color: isActive ? "#fff" : "grey",})} 
        >
        <span className="sidebarItems">GitHub</span>
        </NavLink>
        <NavLink       
          to="/vscode" 
          style={({ isActive }) => ({color: isActive ? "#fff" : "grey",})} 
        >
        <span className="sidebarItems">VS-Code</span>
        </NavLink>
        <li><a href="/VS-Code">VS-Code</a></li>
        <li><a href="/HTML">HTML</a></li>
        <li><a href="/CSS">CSS</a></li>
        <li><a href="/JavaScript">JavaScript</a></li>
      </ul>
    </div>
  )
}

export default SideBar