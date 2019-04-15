import React from 'react';
import {Card} from "./Card";
import {Droppable} from "react-beautiful-dnd";
import styled from "styled-components";

const CustomLane = styled.div`
 background-color: ${props => (props.isDraggingOver ? '#c8e6c9' : '#a5d6a7')};
 margin: 5px;
 flex: 1;
 border-radius: 5px;
 box-shadow: 3px 1px 1px #43a047;
`;


export const Lane = props => {
    return (
            <Droppable droppableId={props.id.toString()}>
                {(provided, snapshot) => (
                    <CustomLane {...provided.droppableProps} ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver} style={{'min-height': '50px'}}>
                        <p style={{textAlign: 'center'}}>{props.name}</p>
                        {props.cards && props.cards.map((card, index) => <Card name={card.name}
                                                                               description={card.description}
                                                                               id={card.id}
                                                                               index={index}
                                                                               onCardDelete={() => props.onCardDelete(props.id, card.id)}
                                                                               onClick={() => props.onCardEdit(props.id, card.id, card.name, card.description, index)}/>)}
                        {provided.placeholder}
                        <p style={{float: 'right', margin: '5px'}} onClick={() => props.addCard(props.id)}>Add a card...</p>
                    </CustomLane>
                )}
            </Droppable>
    )
};

