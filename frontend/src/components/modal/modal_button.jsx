import React from 'react';

const ModalButton = ({ openModal, modalType }) => {

  let startButtonText;
  let endButtonText;

  switch(modalType.type){
    case 'group': 
      startButtonText = 'Create'
      endButtonText = 'Group'
      break;
    case 'movie': 
      startButtonText = 'Add'
      endButtonText = 'Movie'
      break;
    case 'movieDisplay': 
      startButtonText = 'Add'
      endButtonText = 'Movie'
      break;
    case 'review': 
      startButtonText = 'Add'
      endButtonText = 'Review'
      break;
    default:
      startButtonText = null;
      endButtonText = null;
      break;
  }

  return (
      
    <div onClick={() => openModal(modalType)} className="modal-button">
      <button >
        <span className='modal-start-text'>{startButtonText}</span>
        <hr />
        <span className='modal-end-text'>{endButtonText}</span>
      </button>
    </div>

  );
};

export default ModalButton;