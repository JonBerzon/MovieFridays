import React from "react";

class LeaveGroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newAdmin: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        if (e.currentTarget.value === "Select User") {
            this.setState({newAdmin: null})
        } else {
            let newAdmin = this.props.users.filter(user => user._id === e.currentTarget.value)[0]
            this.setState({newAdmin: newAdmin, errors: null})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.newAdmin || this.props.currentUser.id !== this.props.owner._id || this.props.users.length === 1) {
            this.setState({errors: null})
            this.props.removeUserFromGroup({
                user_id: this.props.userId,
                group_id: this.props.groupId,
                newAdmin: this.state.newAdmin
            }).then(()=>{
                this.props.closeModal();
                this.props.history.push("/groups")
            })
        } else {
            this.setState({errors: <p className='leave-group-errors'>You must select a new admin</p>})
        }
    }

    render() {
        const {currentUser, userId, groupId, owner, users} = this.props;
        return (
            <div className='leave-group-form-container'>
                <form className='leave-group-form' onSubmit={this.handleSubmit}>
                    <h3 className='leave-group-h3'>Are you sure you want to leave the group?</h3>
                    {
                        currentUser.id === owner._id && users.length > 1 ?
                        <div className='select-admin-container'>
                            <h3>Select a new Admin:</h3>
                            <select className='select-admin' id="selectAdmin" onChange={(e)=>this.handleChange(e)}>
                                <option value="Select User">Select User</option>
                                {users.map((user, idx) => {
                                    if (user._id !== owner._id) {
                                        return <option key={`${user._id}${idx}`} value={user._id}>{user.username}</option>
                                    }
                                })}
                            </select>
                        </div>
                        : <div></div>
                    }
                    {this.state.errors}
                    <button>Leave Group</button>
                </form>
            </div>
        )
    }
}

export default LeaveGroupForm;