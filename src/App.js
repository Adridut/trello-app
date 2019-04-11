import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Lane} from "./Components/Lane";
import {CustomModal} from "./Components/CustomModal";


let defaultData = [
    {
        id: '1',
        name: 'Senior Dev',
        description: 'JobNinja',
        laneId: "2",
    },
    {
        id: '2',
        name: 'Data scientist',
        description: 'Facebook',
        laneId: "2",
    },
    {
        id: '3',
        name: 'Manager',
        description: 'Airbus',
        laneId: "1",
    }
];

let id = 4;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {cards: defaultData,
            isAddModalOpen: false,
            title: '',
            description:'',
            laneId: '',
            isEditModalOpen: false,
            cardId: ''}
            ;

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.addCard = this.addCard.bind(this)
        this.onCardEdit = this.onCardEdit.bind(this)
    }

    addCard = (laneId) => {
        this.setState({isAddModalOpen: true, laneId: laneId})
    }

    onCardDelete = (cardId) => {
        let newState = this.state.cards.filter(card => card.id !== cardId);
        this.setState({cards: newState});

    }

    onCardEdit = (laneId, cardId, title, description) => {
        this.setState({isEditModalOpen: true, cardId: cardId, laneId: laneId, title: title, description: description})
    }

    closeEditModal = () => {
        this.setState({isEditModalOpen: false});
        let newState = this.state.cards.filter(card => card.id !== this.state.cardId).concat([{id: id,
            name: this.state.title,
            description: this.state.description,
            laneId: this.state.laneId}]);
        this.setState({cards: newState, title: '', description: ''});
    }

    closeAddModal = () => {
        id++;
        this.setState({isAddModalOpen: false});
        let newState = this.state.cards.concat([{id: id,
            name: this.state.title,
            description: this.state.description,
            laneId: this.state.laneId}]);
        this.setState({cards: newState, title: '', description: ''});
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    }


    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    }

    render() {
        return (
            <div style={{backgroundColor: "blue", margin: "10px", display: "flex"}}>
                <CustomModal isOpen={this.state.isEditModalOpen}
                             handleTitleChange={this.handleTitleChange}
                             handleDescriptionChange={this.handleDescriptionChange}
                             closeModal={this.closeEditModal} title={this.state.title} description={this.state.description}/>
                <CustomModal isOpen={this.state.isAddModalOpen}
                             handleTitleChange={this.handleTitleChange}
                             handleDescriptionChange={this.handleDescriptionChange} closeModal={this.closeAddModal}/>
                <Lane name="Je vais postuler" id="1" cards={this.state.cards}
                      addCard={this.addCard} onCardDelete={this.onCardDelete} onCardEdit={this.onCardEdit}/>
                <Lane name="J'ai postulé" id="2" cards={this.state.cards}
                      addCard={this.addCard} onCardDelete={this.onCardDelete} onCardEdit={this.onCardEdit}/>
                <Lane name="J'ai relancé" id="3" cards={this.state.cards}
                      addCard={this.addCard} onCardDelete={this.onCardDelete} onCardEdit={this.onCardEdit}/>
                <Lane name="J'ai un entretien" id="4" cards={this.state.cards}
                      addCard={this.addCard} onCardDelete={this.onCardDelete} onCardEdit={this.onCardEdit}/>
            </div>
        );
    }
}


export default App;
