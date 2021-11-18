import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getPopular } from '../../actions/popular_action';
import Popular from './popular';

const mSTP = state => ({
    popular: state.entities.popular
})

const mDTP = dispatch => ({
    getPopular: () => dispatch(getPopular())
})

export default withRouter(connect(mSTP,mDTP)(Popular));
