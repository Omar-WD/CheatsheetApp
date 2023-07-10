import React from 'react'
import './Searchbar.css'
import { IoMdSearch } from "react-icons/io";

const Searchbar = () => {
  return (
      <div className='searchbarContainer'>
        <IoMdSearch className='searchIcon' size={20} />
      <input type="text" placeholder="Search..." />
    </div>
  )
}

export default Searchbar
