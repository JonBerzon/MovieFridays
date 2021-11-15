export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
import * as MovieAPIUtil from '../util/movie_api_util'

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie
});

const receiveMovies = movies => ({
    type: RECEIVE_MOVIES,
    movies
});

const removeMovie = movie_id => ({
    type: REMOVE_MOVIE,
    movie_id
});

export const fetchMovie = id => dispatch => (
    MovieAPIUtil.fetchMovie(id)
        .then(movie => dispatch(receiveMovie(movie)))
)

export const fetchMovies = () => dispatch => (
    MovieAPIUtil.fetchMovies()
        .then(movies => dispatch(receiveMovies(movies)))
)

export const createMovie = movie => dispatch => (
    MovieAPIUtil.createMovie(movie)
        .then(movie => dispatch(receiveMovie(movie)))
)

export const deleteMovie = id => dispatch (
    MovieAPIUtil.deleteMovie(id)
        .then(() => dispatch(removeMovie(id)))
)