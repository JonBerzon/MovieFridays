import {
    RECEIVE_REVIEW,
    RECEIVE_REVIEWS,
    REMOVE_REVIEW
} from '../actions/review_actions';

const ReviewsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REVIEW:
            return {...state, [action.review.id]: action.review};
        case RECEIVE_REVIEWS:
            return action.reviews
        case REMOVE_REVIEW:
            nextState = {...state}
            delete nextState[action.id]
            return nextState;
        default:
            return state;
    }
}

export default ReviewsReducer;