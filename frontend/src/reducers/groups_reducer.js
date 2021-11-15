import {
    RECEIVE_GROUP,
    RECEIVE_GROUPS,
    REMOVE_GROUP
} from '../actions/group_actions';

const GroupsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GROUP:
            return {...state, [action.group._id]: action.group};
        case RECEIVE_GROUPS:
            let newState = {};

            action.groups.forEach(group => {
                newState[group._id] = group
            });

            return newState;
            
        case REMOVE_GROUP:
            let nextState = {...state}
            delete nextState[action.id]
            return nextState;
        default:
            return state;
    }
}

export default GroupsReducer;