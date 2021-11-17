import * as MovieAPIUtil from '../util/movie_api_util';

export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie: movie.data
});

const receiveMovies = movies => ({
    type: RECEIVE_MOVIES,
    movies: movies.data
});

const removeMovie = movie_id => ({
    type: REMOVE_MOVIE,
    movie_id
});

export const fetchMovie = id => dispatch => (
    MovieAPIUtil.fetchMovie(id)
        .then(movie => dispatch(receiveMovie(movie)))
)

export const fetchMovies = group_id => dispatch => (
    MovieAPIUtil.fetchMovies(group_id)
        .then(payload => dispatch(receiveMovies(payload)))
)

export const createMovie = movie => dispatch => (
    MovieAPIUtil.createMovie(movie)
        .then(movie => dispatch(receiveMovie(movie)))
)

export const deleteMovie = id => dispatch => (
    MovieAPIUtil.deleteMovie(id)
        .then(() => dispatch(removeMovie(id)))
)