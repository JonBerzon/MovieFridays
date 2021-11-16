import React from "react";
import GroupMovieItem from "./group_movie_item";
class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetched: false };
  }
  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
    this.props.fetchMovies(this.props.match.params.groupId);
    this.setState({ fetched: true });
  }

  render() {
    if (this.props.movies.length === 0 && !this.state.fetched) return null;
    if (!this.props.group) return null;
    return (
      <div className='group-show-main-div'>
          <div className='temp-sidebar-template'></div>
        <div className="group-show-movies-container">
          {this.props.movies.map((movie, idx) => (
            <GroupMovieItem
              key={`${movie._id}${idx}`}
              movie={movie}
              fetchReviews={this.props.fetchReviews}
              reviews={this.props.reviews}
              currentUser={this.props.currentUser}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GroupShow;
