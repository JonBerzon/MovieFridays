import ReviewForm from './review_form';
import { connect } from 'react-redux'
import { updateReview } from '../../actions/review_actions'
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    user: state.session.user,
    review: {
        rating: ownProps.review.rating,
        body: ownProps.review.body,
        _id: ownProps.review._id
    },
    movieId: ownProps.review.movie_id,
    formType: "Edit your review",
    button: "Edit Review",
    movie: ownProps.movie
})

const mDTP = dispatch => ({
    action: review => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ReviewForm);