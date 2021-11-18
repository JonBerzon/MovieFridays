import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ReviewFormContainer from '../reviews/review_form_container';
import GroupFormContainer from '../groups/group_form_container';
import MovieFormContainer from '../movies/movie_form_container';
import MovieDisplayFormContainer from '../movies/movie_display_form_container';
import EditReviewFormContainer from '../reviews/edit_review_form_container';


function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'review':
      component = <ReviewFormContainer movie={modal.movie}/>;
      break;
    case 'group':
      component = <GroupFormContainer />;
      break; 
    case 'movie':
      component = <MovieFormContainer groupId={modal.groupId}/>;
      break;
    case 'movieDisplay':
      component = <MovieDisplayFormContainer groupId={modal.movieId} movieObj={modal.movieObj}/>;
    case 'edit':
      component = <EditReviewFormContainer review={modal.review} movie={modal.movie}/>
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);