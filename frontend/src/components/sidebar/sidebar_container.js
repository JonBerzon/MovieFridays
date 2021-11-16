import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/group_actions';
import { withRouter } from 'react-router-dom';
import Sidebar from './sidebar';

const mapStateToProps = (state) => ({
    groups: state.entities.groups
})

const mapDispatchToProps = (dispatch) => ({
    fetchGroups: () => dispatch(fetchGroups())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));