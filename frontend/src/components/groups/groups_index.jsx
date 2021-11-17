import React from "react";
import PopularContainer from "../popular/popular_container";
import ModalButtonContainer from '../modal/modal_button_container'
import GroupsBlurbs from "./groups_blurbs";

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
          <GroupsBlurbs groups={this.props.groups} addUserToGroup={this.props.addUserToGroup} currentUser={this.props.currentUser} />
        </div>
      </div>
    );
  }
}

export default GroupsIndex;
