import React, {Component} from 'react';
import './App.css';
import {Lane} from "./Components/Lane";
import {CustomModal} from "./Components/CustomModal";
import {DragDropContext} from "react-beautiful-dnd";
import styled from 'styled-components'


const Container = styled.div`
 background: #4caf50;
 margin: 10px;
 display: flex;
 border-radius: 5px;
`;


let defaultData = [
    {
        cards: [
            {
                id: 1,
                name: 'Senior Dev',
                description: 'JobNinja',
            },
            {
                id: 2,
                name: 'Data scientist',
                description: 'Facebook',
            },
            {
                id: 3,
                name: 'Manager',
                description: 'Airbus',
            }
        ]
    },
    {
        cards: [
            {
                id: 7,
                name: 'Senior Dev',
                description: 'JobNinja',
            },
            {
                id: 8,
                name: 'Data scientist',
                description: 'Facebook',
            },
            {
                id: 9,
                name: 'Manager',
                description: 'Airbus',
            }
        ]
    },
    {
        cards: [
            {
                id: 4,
                name: 'Senior Dev',
                description: 'JobNinja',
            },
            {
                id: 5,
                name: 'Data scientist',
                description: 'Facebook',
            },
            {
                id: 6,
                name: 'Manager',
                description: 'Airbus',
            }
        ]
    },
    {
        cards: [
            {
                id: 10,
                name: 'Senior Dev',
                description: 'JobNinja',
            },
        ]
    }
];


let id = 11;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: defaultData,
            isAddModalOpen: false,
            title: '',
            description: '',
            laneId: '',
            isEditModalOpen: false,
            cardId: '',
            index: 0
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.addCard = this.addCard.bind(this);
        this.onCardEdit = this.onCardEdit.bind(this);
        this.closeAddModal = this.closeAddModal.bind(this);
        this.onCardDelete = this.onCardDelete.bind(this);
        this.onCardEdit = this.onCardEdit.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    addCard = (laneId) => {
        this.setState({isAddModalOpen: true, laneId: laneId})
    };

    closeAddModal = () => {
        id++;
        this.setState({isAddModalOpen: false});
        let newState = this.state.cards;
        newState[this.state.laneId]['cards'] = this.state.cards[this.state.laneId]['cards'].concat([{
            id: id,
            name: this.state.title,
            description: this.state.description,
        }]);
        this.setState({cards: newState, title: '', description: ''});
    };

    onCardDelete = (laneId, cardId) => {
        let newState = this.state.cards;
        newState[laneId]['cards'] = this.state.cards[laneId]['cards'].filter(card => card.id !== cardId);
        this.setState({cards: newState});

    };

    onCardEdit = (laneId, cardId, title, description, index) => {
        this.setState({isEditModalOpen: true, cardId: cardId, laneId: laneId, title: title, description: description, index: index})
    };

    closeEditModal = () => {
        this.setState({isEditModalOpen: false});
        let newState = this.state.cards;
        newState[this.state.laneId]['cards'][this.state.index] = {
            id: id,
            name: this.state.title,
            description: this.state.description,
            laneId: this.state.laneId
        };
        this.setState({cards: newState, title: '', description: ''});
    };


    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    };


    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    };


    onDragEnd = result => {
        const {destination, source, draggableId} = result;


        if (!destination || (source.index === destination.index && destination.droppableId === source.droppableId)) {
            return;
        }

        const card = this.state.cards[parseInt(source.droppableId)]['cards'][source.index];
        const name = card.name;
        const description = card.description;

        let newState = this.state.cards;


        newState[parseInt(source.droppableId)]['cards'].splice(source.index, 1);

        newState[parseInt(destination.droppableId)]['cards'].splice(destination.index, 0, {
            id: parseInt(draggableId),
            name: name,
            description: description,
            laneId: parseInt(destination.droppableId)
        });


        this.setState({cards: newState});

    };

    render() {
        return (
            <Container>
                <CustomModal isOpen={this.state.isEditModalOpen}
                             handleTitleChange={this.handleTitleChange}
                             handleDescriptionChange={this.handleDescriptionChange}
                             closeModal={this.closeEditModal} title={this.state.title}
                             description={this.state.description}/>
                <CustomModal isOpen={this.state.isAddModalOpen}
                             handleTitleChange={this.handleTitleChange}
                             handleDescriptionChange={this.handleDescriptionChange}
                             closeModal={this.closeAddModal}/>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Lane name="Je vais postuler" id={0} cards={this.state.cards[0]['cards']}
                          addCard={this.addCard} onCardDelete={this.onCardDelete} onCardEdit={this.onCardEdit}/>
                    <Lane name="J'ai postulé" id={1} cards={this.state.cards[1]['cards']}
                          addCard={this.addCard} onCardDelete={this.onCardDelete} onCardEdit={this.onCardEdit}/>
                    <Lane name="J'ai relancé" id={2} cards={this.state.cards[2]['cards']}
                          addCard={this.addCard} onCardDelete={this.onCardDelete} onCardEdit={this.onCardEdit}/>
                    <Lane name="J'ai un entretien" id={3} cards={this.state.cards[3]['cards']}
                          addCard={this.addCard} onCardDelete={this.onCardDelete} onCardEdit={this.onCardEdit}/>
                </DragDropContext>
            </Container>
        );
    }
}


export default App;
