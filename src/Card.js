import React from "react";
import './Card.css';

export const Card = props => {
    console.log(props)
    return (
        <div className="Card">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt={'monster picture'} />
            <h1 key={props.id}>{props.monster.name}</h1>
            <p>{props.email}</p>
        </div>
    )
}
