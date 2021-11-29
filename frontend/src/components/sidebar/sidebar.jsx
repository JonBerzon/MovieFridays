import React from "react";
import { withRouter, Link } from 'react-router-dom';

const Sidebar = props => {
    const socialNetwork = (
        <div className="social-network">
            <p className="creators">CREATORS</p>
            <div className="team-members">
                <div className="container">
                    <img className="image" src="https://avatars.githubusercontent.com/u/43277845?v=4" alt=""/>
                    <div className="overlay">
                        <p className="member-name">Jonathan</p>
                        <div className="links">
                            <a className="members" href="https://github.com/JonBerzon" target="_blank" rel="noreferrer"><div className="link1"></div></a>
                            <a className="members" href="https://www.linkedin.com/in/jonathanberzon/" target="_blank" rel="noreferrer"><div className="link2"></div></a>
                            <a className="members" href="https://jonberzon.github.io/" target="_blank" rel="noreferrer" ><div className="link3" rel="noreferrer"></div></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img className="image" src="https://avatars.githubusercontent.com/u/84539591?v=4" alt=""/>
                    <div className="overlay">
                        <p className="member-name">Yehuda</p>
                        <div className="links">
                            <a className="members" href="https://github.com/yudagn" target="_blank" rel="noreferrer"><div className="link1"></div></a>
                            <a className="members" href="https://www.linkedin.com/in/yehuda-goldschein-79872199/" target="_blank" rel="noreferrer"><div className="link2"></div></a>
                            <a className="members" href="https://yudagn.github.io/Portfolio/" target="_blank" rel="noreferrer" ><div className="link3"></div></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img className="image" src="https://avatars.githubusercontent.com/u/86322564?v=4" alt=""/>
                    <div className="overlay">
                        <p className="member-name">Maisie</p>
                        <div className="links">
                            <a className="members" href="https://github.com/maisiejillbt" target="_blank" rel="noreferrer"><div className="link1"></div></a>
                            <a className="members" href="https://www.linkedin.com/in/maisie-bruno-tyne-178a469a/" target="_blank" rel="noreferrer"><div className="link2"></div></a>
                            <a className="members" href="https://maisiejillbt.github.io/Resume/" target="_blank" rel="noreferrer"><div className="link3"></div></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img className="image" src="https://avatars.githubusercontent.com/u/84352016?v=4" alt=""/>
                    <div className="overlay">
                        <p className="member-name">Albert</p>
                        <div className="links">
                            <a className="members" href="https://github.com/rlachivirus" target="_blank" rel="noreferrer"><div className="link1"></div></a>
                            <a className="members" href="https://www.linkedin.com/in/albertck/" target="_blank" rel="noreferrer"><div className="link2"></div></a>
                            <a className="members" href="https://rlachivirus.github.io/albertck/" target="_blank" rel="noreferrer"><div className="link3"></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    if (props.display === 'group') {
        return (
            <div className="sidebar-parent-div">
                <div className="sidebar-title-and-groups">
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
                </div>

                {socialNetwork}
                
            </div>
        )
    } else if (props.display === 'show') {
        return (
            <div className="sidebar-parent-div">
                <div className="sidebar-title-and-groups">
                    <p>GROUP MEMBERS</p>
                    <ul className="sidebar-user-names">
                        {
                            Object.values(props.groups.users).map(user => (
                                <li key={user._id} className="sidebar-user-name">{user.username}</li>
                            ))
                        }
                    </ul>
                </div>

                {socialNetwork}

            </div>
        )
    } else {
        return (
            <div className="sidebar-parent-div">
                <div className="sidebar-title-and-groups">
                    <p>GROUP MEMBERS</p>
                    <ul className="sidebar-user-names">
                        {
                            Object.values(props.group.users).map(user => (
                                <li key={user._id} className="sidebar-user-name">{user.username}</li>
                            ))
                        }
                    </ul>
                </div>

                {socialNetwork}

            </div>
        )
    }

}

export default withRouter(Sidebar);