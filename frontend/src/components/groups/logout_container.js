import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";
import Logout from "./logout";


const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mDTP)(Logout)