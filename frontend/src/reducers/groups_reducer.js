import {
    RECEIVE_GROUP,
    RECEIVE_GROUPS,
    REMOVE_GROUP
} from '../actions/group_actions';

const GroupsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GROUP:
            return {...state, [action.group.id]: action.group};
        case RECEIVE_GROUPS:
            return action.groups
        case REMOVE_GROUP:
            nextState = {...state}
            delete nextState[action.id]
            return nextState;
        default:
            return state;
    }
}

export default GroupsReducer;