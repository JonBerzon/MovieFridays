import {
    RECEIVE_REVIEW,
    RECEIVE_REVIEWS,
    REMOVE_REVIEW
} from '../actions/review_actions';

const ReviewsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REVIEW:
            return {...state, [action.review._id]: action.review};
        case RECEIVE_REVIEWS:
            let newState = {};

            action.reviews.forEach(review => {
                newState[review._id] = review
            });

            return newState;
        case REMOVE_REVIEW:
            let nextState = {...state};
            delete nextState[action.review_id];
            return nextState;
        default:
            return state;
    }
}

export default ReviewsReducer;