import React from "react";
import { withRouter, Link } from 'react-router-dom';

const Sidebar = props => {
    const socialNetwork = (
        <div className="social-network">
            <a className="members" href="https://github.com/JonBerzon" target="_blank">
                <img className="links" src="https://avatars.githubusercontent.com/u/43277845?v=4"/>
            </a>
            <a className="members" href="https://github.com/yudagn" target="_blank">
                <img className="links" src="https://avatars.githubusercontent.com/u/84539591?v=4"/>
            </a>
            <a className="members" href="https://github.com/maisiejillbt" target="_blank">
                <img className="links" src="https://avatars.githubusercontent.com/u/86322564?v=4"/>
            </a>
            <a className="members" href="https://github.com/rlachivirus" target="_blank">
                <img className="links" src="https://avatars.githubusercontent.com/u/84352016?v=4"/>
            </a>
        </div>
    )

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
                                    <Link key={group._id} to={`/groups/${group._id}`}>
                                        <li key={group._id} className="sidebar-user-group">{group.name}</li>
                                    </Link>
                                )
                            }  
                        })

                        return list; 
                    })}
                </ul>

                {socialNetwork}
                
            </div>
        )
    } else if (props.display === 'show') {
        return (
            <div className="sidebar-parent-div">
                <p>GROUP MEMBERS</p>
                <ul className="sidebar-user-names">
                    {
                        Object.values(props.groups.users).map(user => (
                            <li key={user._id} className="sidebar-user-name">{user.username}</li>
                        ))
                    }
                </ul>

                {socialNetwork}

            </div>
        )
    } else {
        return (
            <div className="sidebar-parent-div">
                <p>GROUP MEMBERS</p>
                <ul className="sidebar-user-names">
                    {
                        Object.values(props.group.users).map(user => (
                            <li key={user._id} className="sidebar-user-name">{user.username}</li>
                        ))
                    }
                </ul>

                {socialNetwork}

            </div>
        )
    }

}

export default withRouter(Sidebar);