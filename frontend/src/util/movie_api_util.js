import axios from 'axios';

export const fetchMovie = id => (
    axios.get(`/api/movies/show/${id}`)
)

export const fetchMovies = group_id => (
    axios.get(`/api/movies/${group_id}`)
)

export const createMovie = movie => (
    axios.post(`/api/movies/${movie.group_id}`, movie)
)

export const deleteMovie = id => (
    axios.delete(`/api/movies/${id}`)
)