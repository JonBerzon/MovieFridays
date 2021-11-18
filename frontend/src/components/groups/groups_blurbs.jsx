import React from "react";
import { Link } from "react-router-dom";

class GroupsBlurbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetched: false };
  }
  componentDidMount() {
    this.props
      .fetchMovies(this.props.group._id)
      .then(() => this.setState({ fetched: true }));
  }

  render() {
    let props = this.props;
    let group = props.group;
    let members =
      group.users.length > 8 ? group.users.slice(0, 8) : group.users;
    if (props.movies.length === 0 && !this.state.fetched) return null;
    let moviesSorted = props.movies;
    moviesSorted = moviesSorted.filter(movie => movie.group_id === group._id);
    moviesSorted.sort((a, b) =>
      a.cumulative_reviews / a.num_reviews > b.cumulative_reviews / b.num_reviews
        ? -1
        : 1
    );
    let topPicks = moviesSorted.slice(0, 4);
    topPicks = topPicks.filter(movie => movie.num_reviews !== 0);
    debugger
    return (
      <div className="group-blurb-container">
        <div className="group-blurb-header">
          <Link to={`/groups/${group._id}`}>
            <h3 className="group-blurb-name">{group.name}</h3>
          </Link>
          {group.users.filter(user => user._id === props.currentUser.id)
            .length === 0 ? (
            <span
              className="group-blurb-join-button"
              onClick={() =>
                props.addUserToGroup({
                  user_id: props.currentUser.id,
                  group_id: group._id,
                })
              }
            >
              JOIN
            </span>
          ) : (
            <Link
              to={`/groups/${group._id}`}
              className="group-blurb-view-button"
            >
              VIEW
            </Link>
          )}
        </div>
        <hr className="group-blurb-header-underline" />
        <Link to={`/groups/${group._id}`}>
          <div className="group-blurb-members-picks-container">
            <div className="group-blurb-members-container">
              <div className="group-blurb-members-header-container">
                <h4 className="group-blurb-members-h4">MEMBERS</h4>
                <hr className="group-blurb-members-underline" />
              </div>
              <div className="group-blurb-members">
                {members.map((member, idx) => (
                  <div
                    key={`${member._id}${idx}`}
                    className="group-blurb-member-avatar-container"
                  >
                    {member._id === group.owner._id ? (
                      <div className="group-blurb-owner-crown"></div>
                    ) : (
                      <div></div>
                    )}
                    <img
                      src={member.avatar}
                      alt="Member Avatar"
                      className="group-blurb-member-avatar"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="group-blurb-our-top-picks-container">
              <div className="group-blurb-our-top-picks-header-container">
                <h4 className="group-blurb-our-top-picks-h4">OUR TOP PICKS</h4>
              </div>
              <hr className="group-blurb-top-picks-underline" />

              <div className="group-blurb-our-top-picks">
               { topPicks.length === 0 ? <li className='group-blurb-no-movies-rated'>NO MOVIES RATED YET</li> : topPicks.map((movie, idx) => {
                  let groupRating = movie.cumulative_reviews / movie.num_reviews;
                  return (
                    <div className="group-blurb-top-pick">
                      <li className="group-blurb-top-pick-title">
                        <span className="group-blurb-top-pick-number">
                          {idx + 1}
                        </span>
                        {movie.title.length > 15 ? `${movie.title.slice(0, 15)}...` : movie.title}
                      </li>
                      <span className="group-blurb-top-pick-rating">
                        {groupRating ? `${groupRating} / 10` : '? / 10'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
export default GroupsBlurbs;
