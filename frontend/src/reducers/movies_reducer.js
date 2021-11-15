import {
    RECEIVE_MOVIE,
    RECEIVE_MOVIES,
    REMOVE_MOVIE
} from '../actions/movie_actions';

const MoviesReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_MOVIE:
            return {...state, [action.movie._id]: action.movie};
        case RECEIVE_MOVIES:
            let newState = {};

            action.movies.forEach(movie => {
                newState[movie._id] = movie
            });

            return newState;
        case REMOVE_MOVIE:
            let nextState = {...state}
            delete nextState[action.movie_id]
            return nextState;
        default:
            return state;
    }
}

export default MoviesReducer;