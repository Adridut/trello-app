import React from 'react';


export const Card = props => {
    return (
        <div onClick={props.onClick} style={{backgroundColor: "yellow", margin: "5px", flex: '1'}}>
            <p onClick={() => props.onCardDelete(props.id)}>X</p>
            <p style={{textAlign: 'center', padding: "2px"}}>{props.name}</p>
            <p style={{textAlign: 'center', padding: "2px"}}>{props.description}</p>
        </div>
    )
}
