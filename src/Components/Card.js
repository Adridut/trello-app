import React from 'react';
import {Draggable} from "react-beautiful-dnd";


export const Card = props => {

    return (
        <Draggable draggableId={props.id} index={props.index} key={props.id}>
            {(provided) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                        <div style={{backgroundColor: "yellow", margin: "5px", flex: '1'}}>
                            <p style={{textAlign: 'center'}} onClick={() => props.onCardDelete(props.id)}>X</p>
                            <div onClick={props.onClick} style={{backgroundColor: "red"}}>
                                <p style={{textAlign: 'center', padding: "2px"}}>{props.name}</p>
                                <p style={{textAlign: 'center', padding: "2px"}}>{props.description}</p>
                            </div>
                            <p onClick={props.moveLeft}>To the left</p>
                            <p onClick={props.moveRight}>To the right</p>
                        </div>
                    </div>)
            }
            }
        </Draggable>
    )
}
