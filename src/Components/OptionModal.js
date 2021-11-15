import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={450}
        className='modal'
    >
        <h3 className='modal__title'>Selected option:</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button
            onClick={props.clearSelectedOption}
            className='button'
        >
            Okay</button>
    </Modal>
);

export default OptionModal;