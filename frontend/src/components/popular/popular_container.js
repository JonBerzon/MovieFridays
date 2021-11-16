import { connect } from 'react-redux';
import { fetchPopular } from '../../actions/popular_action';
import Popular from './popular';

const mSTP = state => ({
    popular: state.entities.popular
})

const mDTP = dispatch => ({
    fetchPopular: () => dispatch(fetchPopular())
})

export default connect(mSTP,mDTP)(Popular)
