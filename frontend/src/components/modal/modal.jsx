import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ReviewFormContainer from '../reviews/review_form_container';
import GroupFormContainer from '../groups/group_form_container';
import MovieFormContainer from '../movies/movie_form_container';
import MovieDisplayFormContainer from '../movies/movie_display_form_container';
import EditReviewFormContainer from '../reviews/edit_review_form_container';
import LeaveGroupFormContainer from '../groups/leave_group_form_container';

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
      component = <MovieDisplayFormContainer userGroups={modal.userGroups} movieObj={modal.movieObj}/>;
      break;
    case 'edit':
      component = <EditReviewFormContainer review={modal.review} movie={modal.movie}/>
      break;
    case 'remove user':
      component = <LeaveGroupFormContainer userId={modal.user_id} groupId={modal.group_id} users={modal.users} owner={modal.owner}/>
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