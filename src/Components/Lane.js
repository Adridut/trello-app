import React from 'react';
import {Card} from "./Card";

export const Lane = props => {
    return (
        <div style={{backgroundColor: "green", margin: "5px", flex: '1'}}>
            <p style={{textAlign: 'center'}}>{props.name}</p>
            {props.cards && props.cards
                .filter(e => e.laneId === props.id)
                .map((card)=> <Card name={card.name}
                                 description={card.description}
                                 id={card.id}
                                 onCardDelete={props.onCardDelete}
                                 onClick={() => props.onCardEdit(props.id, card.id, card.name, card.description)}/>)}
            <p style={{float: 'right', margin: '5px'}} onClick={() => props.addCard(props.id)}>Add a card...</p>
        </div>
    )
}

