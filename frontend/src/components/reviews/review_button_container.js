import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ReviewButton from './review_button';

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(ReviewButton);