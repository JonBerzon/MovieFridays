import React from "react";
import GroupMovieItem from "./group_movie_item";
import GroupMovieItemContainer from "./group_movie_item_container";
import Sidebar from "../sidebar/sidebar";

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.filterContainer = React.createRef();
    this.state = {
      fetched: false,
      groupRating: null,
      genre: null,
      title: null,
    };
  }
  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
    this.props
      .fetchMovies(this.props.match.params.groupId)
      .then(() => this.setState({ fetched: true }));
  }

  handleChange(e, field) {
    switch (field) {
      case "genre":
        if (e.target.value === "none") {
          return this.setState({
            [field]: null,
            title: null,
            groupRating: null,
          });
        } else {
          return this.setState({
            [field]: e.target.value,
            title: null,
            groupRating: null,
          });
        }
      case "title":
        if (this.state.title === null) {
          return this.setState({
            [field]: true,
            genre: null,
            groupRating: null,
          });
        } else if (this.state.title === true) {
          return this.setState({
            [field]: false,
            genre: null,
            groupRating: null,
          });
        } else {
          return this.setState({
            [field]: null,
            genre: null,
            groupRating: null,
          });
        }
      case "groupRating":
        if (this.state.title === null) {
          return this.setState({ [field]: true, genre: null, title: null });
        } else if (this.state.title === true) {
          return this.setState({ [field]: false, genre: null, title: null });
        } else {
          return this.setState({ [field]: null, genre: null, title: null });
        }
      default:
        break;
    }
  }

  toggleClass() {
    let filterBox = document.getElementById("filter");
    if (filterBox.classList.contains("none")) {
      filterBox.classList.remove("none");
    } else {
      filterBox.classList.add("none");
    }
  }

  render() {
    console.log(this.props);
    if (this.props.movies.length === 0 && !this.state.fetched) return null;
    if (!this.props.group) return null;
    let moviesFiltered = [...this.props.movies];
    if (this.state.title === true) {
      moviesFiltered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.state.title === false) {
      moviesFiltered.sort((a, b) => a.title.localeCompare(b.title));
      moviesFiltered.reverse();
    } else if (this.state.genre) {
      //movie.genre.includes(this.state.genre)
      moviesFiltered = moviesFiltered.filter(movie =>
        movie.genre.includes(this.state.genre)
      );
    } else if (this.state.groupRating) {
      moviesFiltered.sort((a, b) => (a.groupRating > b.id ? -1 : 1));
    } else if (this.state.groupRating === false) {
      moviesFiltered.sort((a, b) => (a.groupRating > b.id ? 1 : -1));
    }
    // console.log(this.props)
    return (
      <div className="group-show-main-div">
        {/* <div className="temp-sidebar-template"></div> */}
        <Sidebar currentUser={this.props.currentUser} group={this.props.group}/>
        <div className="filter-movies-container">
          <div className="filter-box">
            <div className="filter-header-container">
              <h3
                className="filter-header-h3"
                onClick={() => this.toggleClass()}
              >
                FILTER MOVIES
              </h3>
            </div>
            <div id="filter" className="filter-input-container none">
              <div className="filter-genre-container">
                <label for="genre" className="filter-genre-label">
                  GENRE
                </label>
                <select
                  name="genre"
                  id="genre"
                  onChange={e => this.handleChange(e, "genre")}
                >
                  <option selected value="none">
                    None
                  </option>
                  <option value="Action">Action</option>
                  <option value="Drama">Drama</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Adventure">Adventure</option>
                </select>
              </div>
              <div className="filter-name-container">
                <h4
                  className="filter-name-h4"
                  onClick={e => this.handleChange(e, "title")}
                >
                  Title
                </h4>
                {this.state.title ? (
                  <div className="down-arrow"></div>
                ) : this.state.title === false ? (
                  <div className="up-arrow"></div>
                ) : (
                  <div className="no-arrow"></div>
                )}
              </div>
              <div className="filter-group-rating-container">
                <h4
                  className="filter-group-rating-h4"
                  onClick={e => this.handleChange(e, "groupRating")}
                >
                  GROUP RATING
                </h4>
              </div>
            </div>
          </div>
          <div className="group-show-movies-container">
            {moviesFiltered.map((movie, idx) => (
              <GroupMovieItemContainer
                key={`${movie._id}${idx}`}
                movie={movie}
                currentUser={this.props.currentUser}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default GroupShow;
