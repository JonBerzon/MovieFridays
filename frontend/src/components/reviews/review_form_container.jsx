import ReviewForm from './review_form';
import { connect } from 'react-redux'
import { createReview } from '../../actions/review_actions'
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
  user: state.session.user,
  errors: state.errors
})

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ReviewForm);