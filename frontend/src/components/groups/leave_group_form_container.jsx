import LeaveGroupForm from './leave_group_form';
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions';
import { removeUserFromGroup } from "../../actions/group_actions";
import { withRouter } from 'react-router';
const mSTP = (state, ownProps) => ({
  userId: ownProps.userId,
  groupId: ownProps.groupId,
  owner: ownProps.owner,
  currentUser: state.session.user,
  users: ownProps.users
})

const mDTP = dispatch => ({
  removeUserFromGroup: group => dispatch(removeUserFromGroup(group)),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(LeaveGroupForm));