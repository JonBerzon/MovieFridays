import React from "react";

const GroupsBlurbs = props => {
  let members;
  return (
    <div className="groups-blurb-container">
      {props.groups.map((group, idx) => {
        members =
          group.users.length > 8 ? group.users.slice(0, 8) : group.users;
        return (
          <div key={`${group._id}${idx}`} className="group-blurb-container">
            <div className="group-blurb-header">
              <h3 className="group-blurb-name">{group.name}</h3>
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
                <span className="group-blurb-view-button">VIEW</span>
              )}
            </div>
            <hr className="group-blurb-header-underline" />
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
                        <div className="group-blurb-owner-crown">
                        </div>
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
                  <h4 className="group-blurb-our-top-picks-h4">
                    OUR TOP PICKS
                  </h4>
                </div>
                <hr className="group-blurb-top-picks-underline" />

                <div className="group-blurb-our-top-picks">
                  <div className="group-blurb-top-pick">
                    <li className="group-blurb-top-pick-title">
                      <span className="group-blurb-top-pick-number">1</span>
                      MOVIE TITLE
                    </li>
                    <span className="group-blurb-top-pick-rating">10/10</span>
                  </div>
                  <div className="group-blurb-top-pick">
                    <li className="group-blurb-top-pick-title">
                      <span className="group-blurb-top-pick-number">2</span>
                      MOVIE TITLE
                    </li>
                    <span className="group-blurb-top-pick-rating">10/10</span>
                  </div>
                  <div className="group-blurb-top-pick">
                    <li className="group-blurb-top-pick-title">
                      <span className="group-blurb-top-pick-number">3</span>
                      MOVIE TITLE
                    </li>
                    <span className="group-blurb-top-pick-rating">10/10</span>
                  </div>
                  <div className="group-blurb-top-pick">
                    <li className="group-blurb-top-pick-title">
                      <span className="group-blurb-top-pick-number">4</span>
                      MOVIE TITLE
                    </li>
                    <span className="group-blurb-top-pick-rating">10/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupsBlurbs;
