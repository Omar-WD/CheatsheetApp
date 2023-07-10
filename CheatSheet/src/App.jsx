
import React from "react"
import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";

import SideBar from './components/Sidebar/SideBar'
import Searchbar from './components/Searchbar/index'



function App() {
  return (
    <div className="app-container">
    <SideBar />
    <Searchbar />

    <Routes>
      <Route  path="/" element={<CheatSheets />} />
    </Routes>
  </div>
  )
}

export default App
