import * as ImdbAPIUtil from '../util/imdb_api_util';

export const RECEIVE_POPULAR_MOVIES = "RECEIVE_POPULAR_MOVIES";

const receivePopularMovies = movies => ({
    type: RECEIVE_POPULAR_MOVIES,
    movies: movies.data.items
})

export const fetchPopular = () => dispatch => (
    ImdbAPIUtil.fetchPopular()
        .then(movies => dispatch(receivePopularMovies(movies)))
)
