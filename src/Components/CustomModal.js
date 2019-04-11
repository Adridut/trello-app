import React, {Component} from 'react';
import Modal from 'react-modal';

export const CustomModal = props => {

        return (
            <Modal
                isOpen={props.isOpen}
                style={{
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }}
                contentLabel="Example Modal"
            >

                <h2>Add a new card!</h2>
                <form>
                    <div>
                        <input type="text" name="title" placeholder='Title' value={props.title} onChange={props.handleTitleChange}/>
                    </div>
                    <div>
                        <input type="text" name="description"  placeholder='Description' value={props.description} onChange={props.handleDescriptionChange}/>
                    </div>
                    <button onClick={props.closeModal}>close</button>
                </form>
            </Modal>
        )
    }


