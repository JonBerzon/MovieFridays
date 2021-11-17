import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/group_actions';
import { withRouter } from 'react-router-dom';
import Sidebar from './sidebar';

const mapStateToProps = (state) => ({
    groups: Object.values(state.entities.groups),
    currentUser: state.session.user
})

const mapDispatchToProps = (dispatch) => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));