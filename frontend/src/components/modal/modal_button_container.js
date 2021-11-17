import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ModalButton from './modal_button';

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(ModalButton);