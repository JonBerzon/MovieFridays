import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/movie_actions';
import { fetchReviews } from '../../actions/review_actions';
import MovieShow from './movie_show';
import { fetchGroup } from '../../actions/group_actions';

const mSTP = (state, ownProps) => ({
    movie: state.entities.movies[ownProps.match.params.movieId],
    reviews: state.entities.reviews,
    groups: state.entities.groups

})

const mDTP = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId)),
    fetchReviews: movieId => dispatch(fetchReviews(movieId)),
    fetchGroup: groupId => dispatch(fetchGroup(groupId))
})

export default connect(mSTP, mDTP)(MovieShow);