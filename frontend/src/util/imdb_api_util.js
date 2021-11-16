import axios from 'axios';

const IMDB = process.env.REACT_APP_IMDB;




export const searchMovie = (search) => {
    return axios.get(`https://imdb-api.com/en/API/SearchMovie/${IMDB}/${search}`);
}

export const fetchMovie = id => {
    return axios.get(`https://imdb-api.com/en/API/Title/${IMDB}/${id}`)
}

export const fetchPopular = () => {
    return axios.get(`https://imdb-api.com/en/API/MostPopularMovies/${IMDB}`)
}
