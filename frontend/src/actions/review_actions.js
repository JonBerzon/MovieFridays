import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review: review.data
});

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews: reviews.data
});

const removeReview = review_id => ({
    type: REMOVE_REVIEW,
    review_id
});

export const fetchReviews = movie_id => dispatch => (
    ReviewAPIUtil.fetchReviews(movie_id)
        .then(reviews => dispatch(receiveReviews(reviews)))
)

export const createReview = review => dispatch => (
    ReviewAPIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
)

export const updateReview = review => dispatch => (
    ReviewAPIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
)

export const deleteReview = id => dispatch => (
    ReviewAPIUtil.deleteReview(id)
        .then(() => dispatch(removeReview(id)))
)