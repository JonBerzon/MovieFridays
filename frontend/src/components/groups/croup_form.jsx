import React from "react";

class ReviewForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      rating: '', 
      body:'', 
      errors:{}
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
    if(this.state.body.length === 0){
      const errors = document.getElementById('reviewErrors')
      errors.classList.add('display-errors')
    }else{
      e.preventDefault();
      const review = {
        rating: this.state.rating, 
        body: this.state.body, 
        reviewer: this.props.user.id,
        movie_id: '6193cb9188a480b912b2f' // >>>>>>>>>>>>>>>>>>>>>>>>> THIS NEEDS TO CHANGE TO BE DYNAMIC
      }

      this.props.createReview(review)
        .then(() => this.props.history.push('/groups'));
    }
  }

  render() {
    return (
      
      <div className="review-form-container">
        <h1 className="movie-title">Movie Title</h1>
        <h1>Add your Review</h1>

        <form className="review-form" onSubmit={this.handleSubmit}>
          <div>
            <select id="selectRating" onChange={this.update('rating')}>
              <option value="1">1/10</option>
              <option value="2">2/10</option>
              <option value="3">3/10</option>
              <option value="4">4/10</option>
              <option value="5">5/10</option>
              <option value="6">6/10</option>
              <option value="7">7/10</option>
              <option value="8">8/10</option>
              <option value="9">9/10</option>
              <option value="10">10/10</option>
            </select>
          </div>
          
          <textarea 
            className="body-textarea"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="How did you enjoy the movie?"
           ></textarea>

          <div>
            <h1 id="reviewErrors" className="hide">You must add a body to your review</h1>
            <br />
            <button>Add Review</button>
          </div>

        </form>
      </div>
      
    )
  }; 

} 

export default ReviewForm;
