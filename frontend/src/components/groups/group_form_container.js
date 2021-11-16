import GroupForm from './group_form';
import { connect } from 'react-redux'
import { createGroup } from '../../actions/group_actions'
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
  user: state.session.user,
})

const mDTP = dispatch => ({
  createGroup: group => dispatch(createGroup(group)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(GroupForm);