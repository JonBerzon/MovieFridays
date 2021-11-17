import { connect } from "react-redux";
import GroupBlurbs from "./groups_blurbs";
import { addUserToGroup } from "../../actions/group_actions";
import { fetchMovies } from "../../actions/movie_actions";

const mSTP = (state, ownProps) => ({
  groups: ownProps.groups,
  currentUser: ownProps.currentUser,
  movies: Object.values(state.entities.movies)
});

const mDTP = dispatch => ({
  addUserToGroup: group => dispatch(addUserToGroup(group)),
  fetchMovies: group_id => dispatch(fetchMovies(group_id)),
});

export default connect(mSTP, mDTP)(GroupBlurbs);
