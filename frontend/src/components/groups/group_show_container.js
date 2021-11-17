import { connect } from "react-redux";
import { fetchGroup } from "../../actions/group_actions";
import GroupShow from "./group_show";
import { addUserToGroup } from "../../actions/group_actions";
import { fetchMovies } from "../../actions/movie_actions";
import { fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    movies: Object.values(state.entities.movies),
    reviews: Object.values(state.entities.reviews),
    currentUser: state.session.user,
    ownProps: ownProps
});

const mDTP = dispatch => ({
    fetchGroup: groupId =>  dispatch(fetchGroup(groupId)),
    fetchMovies: groupId => dispatch(fetchMovies(groupId)),
    fetchReviews: movieId => dispatch(fetchReviews(movieId)),
    addUserToGroup: (group) => dispatch(addUserToGroup(group))
})

export default connect(mSTP, mDTP)(GroupShow);