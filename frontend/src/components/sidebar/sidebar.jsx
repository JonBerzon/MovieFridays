import React from "react";
import { withRouter, Link } from 'react-router-dom';

const Sidebar = props => (
            <div className="sidebar-parent-div">
                <p>YOUR GROUPS</p>
                {/* <ul className="sidebar-user-groups">
                    {this.props.user.groups.map(group => (
                        <Link to={`/groups/${group.id}`}>
                            <li className="sidebar-user-group">{group.user.name}</li>
                        </Link>
                    ))};
                </ul> */}
                <ul className="sidebar-user-groups">
                    <li className="sidebar-user-group">group name
                    </li>
                </ul>

                <div className="social-network">
                    <div className="members">
                        <div className="links">
                            <div>Link1</div>
                            <div>Link2</div>
                            <div>Link3</div>
                        </div>
                    </div>
                    <div className="members">
                        <div className="links">
                            <div>Link1</div>
                            <div>Link2</div>
                            <div>Link3</div>
                        </div>
                    </div>
                    <div className="members">
                        <div className="links">
                            <div>Link1</div>
                            <div>Link2</div>
                            <div>Link3</div>
                        </div>
                    </div>
                    <div className="members">
                        <div className="links">
                            <div>Link1</div>
                            <div>Link2</div>
                            <div>Link3</div>
                        </div>
                    </div>

                </div>
                
            </div>
        )

export default withRouter(Sidebar);