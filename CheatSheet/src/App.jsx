
import React from "react"
import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";


import SideBar from './components/Sidebar/SideBar'
import Navbar from './components/Navbar'
import CheatSheets from './pages/CheatSheets'
import GitHub from './pages/GitHub';
import NavCards from "./components/NavCards/NavCards";
import VSCode from "./pages/VSCode";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import JavaScript from "./pages/JavaScript";

function App() {
  return (
    <div className="app-container">
    <Navbar />
    <div className="app-content">
      <SideBar />
      <Routes>
        <Route  path="/" element={<NavCards />} />
        <Route  path="/cheatsheets" element={<CheatSheets />} />
        <Route  path="/github" element={<GitHub />} />
        <Route  path="/vscode" element={<VSCode />} />
        <Route  path="/html" element={<HTML />} />
        <Route  path="/css" element={<CSS />} />
        <Route  path="/javascript" element={<JavaScript />} />
      </Routes>
    </div>
  </div>
  )
}

export default App
