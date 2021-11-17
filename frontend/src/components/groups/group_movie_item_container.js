import { connect } from "react-redux";
import GroupMovieItem from "./group_movie_item";
import { fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
    reviews: Object.values(state.entities.reviews),
    movie: ownProps.movie,
    currentUser: ownProps.currentUser,
})

const mDTP = dispatch => ({
    fetchReviews: movieId => dispatch(fetchReviews(movieId)),
})

export default connect(mSTP, mDTP)(GroupMovieItem);