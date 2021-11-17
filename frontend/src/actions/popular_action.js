import * as ImdbAPIUtil from '../util/imdb_api_util';
import axios from 'axios';

export const RECEIVE_POPULAR_MOVIES = "RECEIVE_POPULAR_MOVIES";

const receivePopularMovies = movies => ({
    type: RECEIVE_POPULAR_MOVIES,
    movies: movies
})

export const sendPopularMovies = movies => {
    return axios.post('/api/popular/create', movies)
}

export const getMovies = () => {
    return axios.get('/api/popular/')
}

export const fetchPopular = () => dispatch => (
    ImdbAPIUtil.fetchPopular()
        .then(movies => sendPopularMovies(movies))
        // .then(movies => dispatch(receivePopularMovies(movies)))
)

export const getPopular = () => dispatch => {
    getMovies()
        .then(movies => dispatch(receivePopularMovies(movies)))
}
