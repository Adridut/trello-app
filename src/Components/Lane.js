import React from 'react';
import {Card} from "./Card";
import {Droppable} from "react-beautiful-dnd";

export const Lane = props => {
    return (
        <div style={{backgroundColor: "green", margin: "5px", flex: '1'}}>
            <p style={{textAlign: 'center'}}>{props.name}</p>
            <Droppable droppableId={props.id}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} style={{'min-height': '50px'}}>
                        {props.cards && props.cards
                            .filter(e => e.laneId === props.id)
                            .map((card, index) => <Card name={card.name}
                                                        description={card.description}
                                                        id={card.id}
                                                        index={index}
                                                        onCardDelete={props.onCardDelete}
                                                        moveLeft={() => props.moveLeft(props.id, card.id, card.name, card.description)}
                                                        moveRight={() => props.moveRight(props.id, card.id, card.name, card.description)}
                                                        onClick={() => props.onCardEdit(props.id, card.id, card.name, card.description)}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <p style={{float: 'right', margin: '5px'}} onClick={() => props.addCard(props.id)}>Add a card...</p>
        </div>
    )
}

