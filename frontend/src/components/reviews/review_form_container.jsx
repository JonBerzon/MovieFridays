import ReviewForm from './review_form';
import { connect } from 'react-redux'
import { createReview} from '../../actions/review_actions'
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  user: state.session.user,
  review:{
    rating: 1,
    body: '',
    _id: null

  },
  formType: "Add your Review",
  button: "Add Review",
  movie: ownProps.movie
})

const mDTP = dispatch => ({
  action: review => dispatch(createReview(review)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ReviewForm);