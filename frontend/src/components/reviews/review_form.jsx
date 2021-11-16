import React from "react";
import { Link } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      rating: '', 
      body:'', 
      errors:{}
    };
  }; 

// Handle field updates (called in the render method)
  update(field) {
      return e => this.setState({
          [field]: e.currentTarget.value
      });
  }

// Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    const review = {
      rating: this.state.rating, 
      body: this.state.body, 
      reviewer: this.props.user.id,
      movie_id: this.props.match.params.movie_id
    }

    this.props.createReview(review);
  }

   // Render the form errors if there are any
  renderErrors() {
    const renderErr = Object.keys(this.state.errors).includes("rating") ? (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="review-errors" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    ) : (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="review-bodyerror" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    )
    return renderErr;
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div className="review-form-background">
        <div classname="review-form-modal">
          {this.renderErrors()}
          


        </div>
      </div>
    )
  }; 

} 

export default ReviewForm;
