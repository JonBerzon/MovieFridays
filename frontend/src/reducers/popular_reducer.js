import { RECEIVE_POPULAR_MOVIES } from "../actions/popular_action";

const PopularReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_POPULAR_MOVIES:
            return action.movies;
        default:
            return state;
    }
}

export default PopularReducer;