import React from "react";
import './Card.css';

export const Card = props => {
    return (
        <div className="Card">
            <h1>{props.monster.name}</h1>
        </div>
    )
}
