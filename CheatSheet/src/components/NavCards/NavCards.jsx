import React from "react";
import Card from "./Card";



function NavCards() {
    const cards=[
      {title:'GitHub',path:'/github'},
      {title:'VS-Code',path:'/vsCode'},
      {title:'HTML',path:'/html'},
      {title:'CSS',path:'/css'},
      {title:'JavaScript',path:'/javascript'},
    ]
    
  return (
    <div className="cardsPage">
        {cards.map((card,index)=>(
            <Card key={index} title={card.title} path={card.path}/>
        ))}
    </div>
  )
}

export default NavCards