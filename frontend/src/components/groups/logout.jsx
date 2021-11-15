import React from "react";

class Logout extends React.Component{

    render(){
        return(
            <button onClick={this.props.logout}>Logout</button>
        )
    }
}

export default Logout