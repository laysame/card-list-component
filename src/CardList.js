import React from "react";
import "./CardList.css";
import {Card} from "./Card";

export const CardList = props => {
    return (
        <div className='Card-list'>
            {props.monsters.map(monster => (
               <Card key={monster.id} monster={monster} />
                ))}
        </div>
    )
}