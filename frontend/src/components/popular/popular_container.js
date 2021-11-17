import { connect } from 'react-redux';
import { getPopular } from '../../actions/popular_action';
import Popular from './popular';

const mSTP = state => ({
    popular: state.entities.popular
})

const mDTP = dispatch => ({
    getPopular: () => dispatch(getPopular())
})

export default connect(mSTP,mDTP)(Popular)
