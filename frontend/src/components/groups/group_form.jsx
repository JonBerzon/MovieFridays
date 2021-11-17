import React from "react";

class GroupForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }; 

// Handle field updates (called in the render method)
  update(field) {
      return e => this.setState({
          [field]: e.currentTarget.value
      });
  }

// Handle form submission
  handleSubmit(e) {

    if(this.state.name.length === 0){
      const errors = document.getElementById('groupErrors')
      errors.classList.add('display-errors')
    }else{
      e.preventDefault();
      const group = {
        name: this.state.name,
        owner_id: this.props.user.id,
      }
      this.props.createGroup(group)
        .then(() => this.props.closeModal());  // NEED TO ADD GROUP ID ... NOT SURE HOW WERE GETTING IT THOUGH
    }
  }

  render() {
    return (
      <div className="group-form-container">
        <h1>Create a Group</h1>
        <form className="group-form" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.name}
            onChange={this.update('name')}
            placeholder="Group Name"
          />
        <div>
          <h1 id="groupErrors" className="hide">You must add a name for your group</h1>
        </div>
        <div>
          <button>Create Group</button>
        </div>
        </form>
      </div>
    )
  }; 

} 

export default GroupForm;
