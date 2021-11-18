import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/movie_actions';
import { deleteReview, fetchReviews, updateReview } from '../../actions/review_actions';
import MovieShow from './movie_show';
import { fetchGroup } from '../../actions/group_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    movie: state.entities.movies[ownProps.match.params.movieId],
    reviews: state.entities.reviews,
    groups: state.entities.groups, 
    currentUser: state.session.user
})

const mDTP = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId)),
    fetchReviews: movieId => dispatch(fetchReviews(movieId)),
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    openModal: modal => dispatch(openModal(modal)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(MovieShow);