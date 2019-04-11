import React from 'react';


export const Card = props => {
    return (
        <div style={{backgroundColor: "yellow", margin: "5px", flex: '1'}}>
            <p style={{textAlign: 'center'}} onClick={() => props.onCardDelete(props.id)}>X</p>
            <div onClick={props.onClick} >
                <p style={{textAlign: 'center', padding: "2px"}}>{props.name}</p>
                <p style={{textAlign: 'center', padding: "2px"}}>{props.description}</p>
            </div>
            <p onClick={props.moveLeft}>To the left</p>
            <p onClick={props.moveRight}>To the right</p>
        </div>
    )
}
