import React from "react";
import GroupMovieItemContainer from "./group_movie_item_container";
import ModalButtonContainer from "../modal/modal_button_container";
import NavbarContainer from "../navbar/navbar_container";
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
      genreSwitch: false,
      editOpen: false,
      groupName: null,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  componentDidMount() {
    this.props
      .fetchGroup(this.props.match.params.groupId)
      .then(res => this.setState({ groupName: res.group.name }));
    this.props
      .fetchMovies(this.props.match.params.groupId)
      .then(() => this.setState({ fetched: true }));
  }

  genreSwitch(e) {
    e.preventDefault();

    let newState = this.state;
    newState.genreSwitch = newState.genreSwitch === true ? false : true;
    this.setState(newState);
  }

  setGenre(e, field) {
    field
      ? this.setState({ genre: null })
      : this.setState({
          genre: e.target.textContent,
          title: null,
          groupRating: null,
        });
    let genreDropdown = document.getElementsByClassName("genre-dropdown");
    genreDropdown[0].classList.add("no-hover");
  }

  handleChange(e, field) {
    e.preventDefault();
    switch (field) {
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
        if (this.state.groupRating === null) {
          return this.setState({ [field]: true, genre: null, title: null });
        } else if (this.state.groupRating === true) {
          return this.setState({ [field]: false, genre: null, title: null });
        } else {
          return this.setState({ [field]: null, genre: null, title: null });
        }
      default:
        break;
    }
  }

  toggleClass(e) {
    e.preventDefault();

    let filterBox = document.getElementById("filter");

    filterBox.classList.contains("hidden")
      ? filterBox.classList.remove("hidden")
      : filterBox.classList.add("hidden");
  }

  removeUser(e) {
    e.preventDefault();
    this.props
      .removeUserFromGroup({
        user_id: this.props.currentUser.id,
        group_id: this.props.group._id,
      })
      .then(() => this.props.history.push("/groups"));
  }

  handleNameChange(e) {
    this.setState({ groupName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.groupName.length === 0) {
      this.setState({
        error: <li className="group-name-errors">Group Name Cant Be Blank</li>,
      });
    } else if (this.state.groupName.length > 20) {
      this.setState({
        error: <li className="group-name-errors">Group Name Cant Be Longer Than 20 Characters</li>,
      });
    }else {
      this.setState({ error: null });
      let group = {
        group_name: this.state.groupName,
        group_id: this.props.group._id,
      };
      this.props
        .editGroupName(group)
        .then(() => this.setState({ editOpen: false }));
    }
  }

  render() {
    if (this.props.movies.length === 0 && !this.state.fetched) return null;
    if (!this.props.group) return null;
    let moviesFiltered = this.props.movies.filter(
      movie => movie.group_id === this.props.group._id
    );
    if (this.state.title === true) {
      moviesFiltered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.state.title === false) {
      moviesFiltered.sort((a, b) => a.title.localeCompare(b.title));
      moviesFiltered.reverse();
    } else if (this.state.genre) {
      moviesFiltered = moviesFiltered.filter(movie =>
        movie.genre.includes(this.state.genre)
      );
    } else if (this.state.groupRating) {
      moviesFiltered.sort((a, b) => {
        return a.cumulative_reviews / a.num_reviews >
          b.cumulative_reviews / b.num_reviews
          ? -1
          : 1;
      });
    } else if (this.state.groupRating === false) {
      moviesFiltered.sort((a, b) =>
        a.cumulative_reviews / a.num_reviews >
        b.cumulative_reviews / b.num_reviews
          ? 1
          : -1
      );
    }

    let genreArr = [
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Horror",
      "Musical",
      "Romance",
      "Sci-Fi",
      "Thriller",
      "Western",
    ];

    const members = this.props.group.users.map(obj => {
      return obj._id;
    });

    return this.props.movies.length === 0 && this.state.fetched ? (
      <div>
        <h1>Add movies to your group</h1>
        {members.includes(this.props.currentUser.id) ? (
          <ModalButtonContainer
            modalType={{
              type: "movie",
              groupId: this.props.match.params.groupId,
            }}
          />
        ) : null}
      </div>
    ) : (
      <div className="group-show-main-div">
        {members.includes(this.props.currentUser.id) ? (
          <ModalButtonContainer
            modalType={{
              type: "movie",
              groupId: this.props.match.params.groupId,
            }}
          />
        ) : null}

        <NavbarContainer />
        <Sidebar
          currentUser={this.props.currentUser}
          group={this.props.group}
        />
        <div className="temp-sidebar-template"></div>
        <div className="group-show-navbar-main-div">
          <div className="filter-movies-container">
            <div className="group-show-header-container">
              <div className="filter-header-group-name-container">
                <div className="group-title-edit-container">
                  {this.state.editOpen ? (
                    <form
                      className="edit-group-name-form"
                      onSubmit={e => this.handleSubmit(e)}
                    >
                      <input
                        type="text"
                        value={this.state.groupName}
                        placeholder="Enter A Group Name"
                        onChange={this.handleNameChange}
                        className="edit-group-name-input"
                      />
                      {this.state.error}
                    </form>
                  ) : (
                    <h3 className="group-title-h3">{this.props.group.name}</h3>
                  )}
                  {this.props.currentUser.id === this.props.group.owner._id ? (
                    <div
                      className="edit-group-name-button"
                      onClick={e =>
                        this.state.editOpen
                          ? this.handleSubmit(e)
                          : this.setState({ editOpen: true })
                      }
                    ></div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <button
                  className="filter-header-button"
                  onClick={e => this.toggleClass(e)}
                >
                  FILTER MOVIES
                </button>
              </div>
              <div id="filter" className="filter-input-flex-container hidden">
                <hr className="filter-box-hr" />
                <div className="filter-input-container">
                  <div className="filter-genre-container">
                    <button
                      tabIndex="0"
                      className="filter-genre-button"
                      onFocus={e => this.genreSwitch(e)}
                      onBlur={e => this.genreSwitch(e)}
                    >
                      GENRE
                    </button>
                    <div
                      className={
                        this.state.genreSwitch === true
                          ? "genre-dropdown visible"
                          : "genre-dropdown hidden"
                      }
                    >
                      <ul>
                        <li onClick={e => this.setGenre(e, "none")}>None</li>
                        {genreArr.map((genre, idx) => (
                          <li
                            onClick={e => this.setGenre(e)}
                            key={`${genre}${idx}`}
                          >
                            {genre}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="filter-name-container">
                    <button
                      className="filter-name-button"
                      onClick={e => this.handleChange(e, "title")}
                    >
                      Title
                    </button>
                    {this.state.title ? (
                      <div className="down-arrow"></div>
                    ) : this.state.title === false ? (
                      <div className="up-arrow"></div>
                    ) : (
                      <div className="no-arrow"></div>
                    )}
                  </div>
                  <div className="filter-group-rating-container">
                    <button
                      className="filter-group-rating-button"
                      onClick={e => this.handleChange(e, "groupRating")}
                    >
                      GROUP RATING
                    </button>
                    {this.state.groupRating ? (
                      <div className="rating-down-arrow"></div>
                    ) : this.state.groupRating === false ? (
                      <div className="rating-up-arrow"></div>
                    ) : (
                      <div className="rating-no-arrow"></div>
                    )}
                  </div>
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
            {members.includes(this.props.currentUser.id) ? (
              <button
                className="leave-group-button"
                onClick={e => this.removeUser(e)}
              >
                Leave Group
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default GroupShow;
