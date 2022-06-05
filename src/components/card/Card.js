import React from "react";
import './Card.css';

export default function Card({monster: {id, name}}) {
   /*
   easier to read:
   const {id, name} = monster;
    */
    return (
        <div className="Card">
            <img src={`https://robohash.org/${id}?set=set2`} alt={'monster'}/>
            <h1 key={id}>{name}</h1>
        </div>
    )
}
