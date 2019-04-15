import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faTimesCircle);


const CustomCard = styled.div`
 background-color: ${props => (props.isDragging ? 'white' : '#e8f5e9')};
 margin: 10px;
 border-radius: 5px;
 box-shadow: 3px 1px 1px ${props => (props.isDragging ? 'white' : '#81c784')};
`;

const Content = styled.p`
    flex: 1;
    padding: 5px;
    padding-left: 15px;
`;

const IconContainer = styled.div`
 display: flex;
`;

export const Card = props => {

    return (
        <Draggable draggableId={props.id.toString()} index={props.index} key={props.id}>
            {(provided, snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <CustomCard isDragging={snapshot.isDragging}>
                            <div onClick={props.onClick}>
                                <IconContainer>
                                    <Content>{props.name}</Content>
                                    <FontAwesomeIcon icon="times-circle"
                                                     onClick={props.onCardDelete}
                                                     style={{padding: "5px"}}/>
                                </IconContainer>
                                <Content>{props.description}</Content>
                            </div>
                        </CustomCard>
                    </div>)
            }
            }
        </Draggable>
    )
}
