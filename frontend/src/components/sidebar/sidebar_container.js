import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/group_actions';
import { withRouter } from 'react-router-dom';
import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => ({
    groups: Object.values(state.entities.groups),
    group: state.entities.groups[ownProps.match.params.groupId],
    currentUser: state.session.user
})

const mapDispatchToProps = (dispatch) => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));