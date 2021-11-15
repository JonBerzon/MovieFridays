import axios from 'axios';

export const fetchReviews = movie_id => (
    axios.get(`/api/reviews/${movie_id}`)
)

export const createReview = review => (
    axios.post('/api/reviews/create', review)
)

export const updateReview = review => (
    axios.patch('/api/reviews/update', review)
)

export const deleteReview = id => (
    axios.delete(`/api/reviews/${id}`)
)