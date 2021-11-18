import { connect } from 'react-redux';
import MovieDisplay from './movie_display';
import { fetchGroups } from '../../actions/group_actions';
import { searchMovie, fetchMovie } from '../../util/imdb_api_util';


const mSTP = (state) => ({
    groups: state.entities.groups, 
    currentUser: state.session.user, 
})

const mDTP = dispatch => ({
    fetchGroups: () => dispatch(fetchGroups()),
    fetchMovie: movieId => fetchMovie(movieId),
})

export default connect(mSTP, mDTP)(MovieDisplay);