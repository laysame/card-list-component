import React from "react";
import './Card.css';


export class Card extends React.Component {

    render() {

        const {monster} = this.props;
        return (
            <div className="Card">
                <img src={`https://robohash.org/${monster.id}?set=set2`} alt={'monster'}/>
                <h1 key={monster.id}>{monster.name}</h1>
            </div>
        )
    }
}
