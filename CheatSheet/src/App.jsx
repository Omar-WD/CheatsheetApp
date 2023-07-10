import { useState } from 'react'
import './App.css'

import { Routes, Route, NavLink } from "react-router-dom";

import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import CheatSheets from './pages/CheatSheets'

function App() {
  return (
    <div className="app-container">
    <Navbar />
    <Searchbar />

    <Routes>
      <Route  path="/" element={<CheatSheets />} />
    </Routes>
  </div>
  )
}

export default App
