import React from 'react';
import purplePlus from '../../assets/icons/plus-symbol-dk-purple.svg'

const ReviewButton = ({ openModal }) => {
  return (
    <div className="review-button">
      <button onClick={() => openModal('review')}>
        <img src={purplePlus} alt="add review" />
      </button>
    </div>
  );
};

export default ReviewButton;