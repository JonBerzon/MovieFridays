import React from "react";
import PopularContainer from "../popular/popular_container";
import GroupsBlurbsContainer from "./groups_blurbs_container";

class GroupsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    if (!this.props.groups) return null;

    return (
      <div className="groups-index-main-div">
        <div className="temp-sidebar-template"></div>
        <div className="groups-index-popular-container">
          <PopularContainer />
          <div className="groups-blurb-container">
            {this.props.groups.map((group, idx) => (
              <GroupsBlurbsContainer
                group={group}
                currentUser={this.props.currentUser}
                key={`${group._id}${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default GroupsIndex;
