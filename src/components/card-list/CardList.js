import React from "react";
import "./CardList.css";
import {Card} from "../card/Card";


export class CardList extends React.Component {
    render() {
        const {monsters} = this.props;

        return (
            <div className='Card-list'>
                {monsters.map(monster => (
                    <Card id={monster.id} monster={monster}/>
                ))}
            </div>
        )
    }
}