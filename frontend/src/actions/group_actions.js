import * as GroupAPIUtil from '../util/group_api_util';
import axios from 'axios';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const REMOVE_GROUP = 'REMOVE_GROUP';

const receiveGroup = group => ({
    type: RECEIVE_GROUP,
    group: group.data
});

const receiveGroups = groups => ({
    type: RECEIVE_GROUPS,
    groups: groups.data
});

const removeGroup = group_id => ({
    type: REMOVE_GROUP,
    group_id
});

export const fetchGroup = id => dispatch => (
    GroupAPIUtil.fetchGroup(id)
        .then(group => dispatch(receiveGroup(group)))
)

export const fetchGroups = () => dispatch => (
    GroupAPIUtil.fetchGroups()
        .then(groups => dispatch(receiveGroups(groups)))
)

export const createGroup = group => dispatch => (
    GroupAPIUtil.createGroup(group)
        .then(group => dispatch(receiveGroup(group)))
)

export const addUserToGroup = group => dispatch => (
    GroupAPIUtil.addUserToGroup(group)
        .then(group => dispatch(receiveGroup(group)))
)

export const removeUserFromGroup = group => dispatch => (
    axios.patch('/api/groups/remove_user', group)
)

export const editGroupName = group => dispatch => (
    axios.patch('/api/groups/edit_name', group)
    .then(group => dispatch(receiveGroup(group)))
)

export const deleteGroup = id => dispatch => (
    GroupAPIUtil.deleteGroup(id)
        .then(() => dispatch(removeGroup(id)))
)