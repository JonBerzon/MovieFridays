import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
    render() {
        return (
            <div class="notFound">
                <p>404</p>
                <p>Oops something went wrong..</p>
                <button><Link to="/groups">Back to Groups</Link></button>
            </div>
        )
    }
}

export default NotFound;