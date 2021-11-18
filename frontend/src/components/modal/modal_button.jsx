import React from 'react';
import purplePlus from '../../assets/icons/plus-symbol-dk-purple.svg'

const ModalButton = ({ openModal, modalType }) => {
  return (
    <div onClick={() => openModal(modalType)} className="modal-button">
      <button >
        <img src={purplePlus} alt="add review" />
      </button>
    </div>
  );
};

export default ModalButton;