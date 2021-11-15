import {
    RECEIVE_MOVIE,
    RECEIVE_MOVIES,
    REMOVE_MOVIE
} from '../actions/movie_actions';

const MoviesReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_MOVIE:
            return {...state, [action.movie.id]: action.movie};
        case RECEIVE_MOVIES:
            return action.movies
        case REMOVE_MOVIE:
            nextState = {...state}
            delete nextState[action.id]
            return nextState;
        default:
            return state;
    }
}

export default MoviesReducer;