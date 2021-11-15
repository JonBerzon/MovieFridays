import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer'
import GroupsReducer from './groups_reducer'
import ReviewsReducer from './reviews_reducer'

const EntitiesReducer = combineReducers({
    groups: GroupsReducer,
    movies: MoviesReducer,
    reviews: ReviewsReducer
})

export default EntitiesReducer;