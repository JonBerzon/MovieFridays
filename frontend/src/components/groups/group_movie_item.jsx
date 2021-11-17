import React from "react";
import { Link } from "react-router-dom";

class GroupMovieItem extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.movie._id);
  }

  render() {
    if (!this.props.movie) return null;
    let groupRating = 0;
    let userRating;
    this.props.reviews.forEach(review => {
      groupRating += review.rating;
      if (review.reviewer._id === this.props.currentUser.id)
        userRating = review.rating;
    });
    return (
      <Link
        to={`/movies/${this.props.movie._id}`}
        className="group-movie-item-container"
      >
        <div className="group-movie-poster-container">
          <img
            className="group-movie-poster"
            src={this.props.movie.poster}
            alt="Movie Poster"
          />
        </div>
        <div className="group-movie-item-movie-info-container">
          <div className="group-movie-item-movie-title-container">
            <h3 className="group-movie-item-movie-title">
              {this.props.movie.title}
            </h3>
            {userRating ? (
              <div className="group-movie-item-your-rating-container">
                <span className="group-movie-item-your-rating-text">
                  YOUR RATING
                </span>
                <span className="group-movie-item-your-rating">
                  {userRating}/10
                </span>
              </div>
            ) : (
              <div className="group-movie-item-havent-rated-container">
                <span className="group-movie-item-havent-rated-text">
                  YOUR RATING N/A
                </span>
              </div>
            )}
          </div>
          <div className="group-movie-item-movie-plot-container">
            <p className="group-movie-item-movie-plot">
              {this.props.movie.plot.slice(0, 243).split("&#39;").join("'")}...
            </p>
          </div>
          <div className="group-movie-item-movie-ratings-container">
            <li className="group-movie-item-rating">
              IMDB RATING{" "}
              <span className="group-movie-item-rating-number">
                {this.props.movie.imdb} / 10
              </span>
            </li>
            <div className="vertical-line"></div>
            <li className="group-movie-item-rating">
              METACRITIC RATING{" "}
              <span className="group-movie-item-rating-number">
                {this.props.movie.meta} / 100
              </span>
            </li>
            <div className="vertical-line"></div>
            <li className="group-movie-item-rating">
              GROUPS RATING{" "}
              <span className="group-movie-item-rating-number">
                {groupRating} / 10
              </span>
            </li>
          </div>
        </div>
      </Link>
    );
  }
}
export default GroupMovieItem;