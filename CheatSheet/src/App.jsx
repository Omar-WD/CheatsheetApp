
import React from "react"
import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";


import SideBar from './components/Sidebar/SideBar'
import Navbar from './components/Navbar'
import CheatSheets from './pages/CheatSheets'
import GitHub from './pages/GitHub';



function App() {
  return (
    <div className="app-container">
    <Navbar />
    <div className="app-content">
      <SideBar />

      <Routes>
        <Route  path="/" element={<CheatSheets />} />
        <Route  path="/cheatsheets" element={<CheatSheets />} />
        <Route  path="/github" element={<GitHub />} />
      </Routes>
    </div>
  </div>
  )
}

export default App
