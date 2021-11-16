import GroupsIndex from "./groups_index";
import { connect } from "react-redux";
import { addUserToGroup, fetchGroups } from "../../actions/group_actions";
const mSTP = state => ({
    groups: Object.values(state.entities.groups),
    currentUser: state.session.user
})

const mDTP = dispatch => ({
    fetchGroups: () => dispatch(fetchGroups()),
    addUserToGroup: (group) => dispatch(addUserToGroup(group))
})

export default connect(mSTP, mDTP)(GroupsIndex);