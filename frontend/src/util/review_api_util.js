import axios from 'axios';

export const fetchReviews = movie_id => (
    axios.get(`/api/reviews/${movie_id}`)
)

export const createReview = review => (
    axios.post('/api/reviews/create', review)
)

export const updateReview = review => (
    axios.patch(`/api/reviews/${review.id}`, review)
)

export const deleteReview = id => (
    axios.delete(`/api/reviews/${id}`)
)