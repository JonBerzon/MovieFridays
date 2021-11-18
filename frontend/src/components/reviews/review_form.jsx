import React from "react";

class ReviewForm extends React.Component {
  constructor(props){
    super(props)

    this.state = this.props.review;

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
        user_id: this.props.user.id,
        movie_id: this.props.movie._id,
        _id: this.state._id
      }

      this.props.action(review)
        .then(() => this.props.closeModal());
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="review-form-container">
        <h1 className="movie-title">{this.props.movie.title}</h1>
        <h1>{this.props.formType}</h1>

        <form className="review-form" onSubmit={this.handleSubmit}>
          <div>
            <select id="selectRating" onChange={this.update('rating')}>
             
              {this.state.rating === 1 ? <option value="1" selected >1/10</option> : <option value="1" >1/10</option>}
              {this.state.rating === 2 ? <option value="2" selected >2/10</option>:<option value="2" >2/10</option> }
              {this.state.rating === 3 ? <option value="3" selected >3/10</option>:<option value="3" >3/10</option> }
              {this.state.rating === 4 ? <option value="4" selected >4/10</option>:<option value="4" >4/10</option> }
              {this.state.rating === 5 ? <option value="5" selected >5/10</option>:<option value="5" >5/10</option> }
              {this.state.rating === 6 ? <option value="6" selected >6/10</option>:<option value="6" >6/10</option> }
              {this.state.rating === 7 ? <option value="7" selected >7/10</option>:<option value="7" >7/10</option> }
              {this.state.rating === 8 ? <option value="8" selected >8/10</option>:<option value="8" >8/10</option> }
              {this.state.rating === 9 ? <option value="9" selected >9/10</option>:<option value="9" >9/10</option> }
              {this.state.rating === 10 ? <option value="10" selected >10/10</option> : <option value="10" >10/10</option>}
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
            <button>{this.props.button}</button>
          </div>

        </form>
      </div>
      
    )
  }; 

} 

export default ReviewForm;
