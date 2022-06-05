import React from "react";
import './Card.css';


export class Card extends React.Component {

    render() {
        const {id, name} = this.props.monster;
        return (
            <div className="Card">
                <img src={`https://robohash.org/${id}?set=set2`} alt={'monster'}/>
                <h1 key={id}>{name}</h1>
            </div>
        )
    }
}
