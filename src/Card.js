import React from "react";
import './Card.css';


export const Card = props => {
    return (
        <div className="Card">
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt={'monster'} />
            <h1 key={props.id}>{props.monster.name}</h1>
        </div>
    )
}
