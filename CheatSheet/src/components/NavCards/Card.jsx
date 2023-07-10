import React from "react";
import {Link} from 'react-router-dom';
import "./Card.css"


function Card({title,path}) {
  return (
    <container className="CardsContainer">
      <Link to={path} className="card">
        <h3>{title}</h3>
      </Link>
    </container>
    
  )
}

export default Card