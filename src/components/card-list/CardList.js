import React from "react";
import "./CardList.css";
import Card from "../card/Card";


export default function CardList({monsters}) {
    return (
        <div className='Card-list'>
            {monsters.map(monster => (
                <Card key={monster.id} monster={monster}/>
            ))}
        </div>
    )
}