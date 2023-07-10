import React from 'react'
import './CheatSheets.css'
import Searchbar from '../../components/Searchbar'

const CheatSheets = () => {
  return (
    <div className="cheatsheet-container">
      <div className="cheatsheet-header">
        <h1>Cheatsheets</h1>
        <Searchbar />
      </div>
    </div>
  )
}

export default CheatSheets
