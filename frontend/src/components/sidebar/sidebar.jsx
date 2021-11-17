import React from "react";
import { withRouter, Link } from 'react-router-dom';

const Sidebar = props => {
    console.log(props)
    if (props.display === 'group') {
        return (
            <div className="sidebar-parent-div">
                <p>YOUR GROUPS</p>
                <ul className="sidebar-user-groups">
                    {props.groups.map(group => {
                        let list;
                        group.users.map(user => {
                            if (user._id === props.currentUser.id) {
                                list = (
                                    <Link to={`/groups/${group._id}`}>
                                        <li className="sidebar-user-group">{group.name}</li>
                                    </Link>
                                )
                            }  
                        })

                        return list; 
                    })}
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
    } else {
        return (
            <div className="sidebar-parent-div">
                <p>GROUP MEMBERS</p>
                <ul className="sidebar-user-names">
                    {Object.values(props.group.users).map(user => {
                        if (user._id !== props.currentUser.id) {
                            return <li className="sidebar-user-name">{user.username}</li>
                        }
                        })}
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
    }

}

export default withRouter(Sidebar);