import React from "react";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // this.props.fetchGroups();
    }


    render() {
        return (
            <div className="sidebar-parent-div">
                <p>GROUP NAMES</p>
                {/* <ul className="sidebar-user-groups">
                    {this.props.user.groups.map(group => (
                        <li className="sidebar-user-group">
                            <img className="sidebar-user-avatar" src={group.user.avatar} />
                            <p>{group.user.name</p>
                        </li>
                    ))}
                </ul> */}
                <ul className="sidebar-user-groups">
                    <li className="sidebar-user-group">group name
                        <ul className="sidebar-group-members">
                            <li className="sidebar-group-member"></li>
                            <li className="sidebar-group-member"></li>
                            <li className="sidebar-group-member"></li>
                            <li className="sidebar-group-member"></li>
                            <li className="sidebar-group-member"></li>
                            <li className="sidebar-group-member"></li>
                            <li className="sidebar-group-member"></li>
                            <li className="sidebar-group-member"></li>
                            <li className="sidebar-group-member"></li>
                            <li className="sidebar-group-member"></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;