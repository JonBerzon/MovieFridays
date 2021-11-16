import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer'
import GroupsReducer from './groups_reducer'
import ReviewsReducer from './reviews_reducer'
import PopularReducer from './popular_reducer';

const EntitiesReducer = combineReducers({
    groups: GroupsReducer,
    movies: MoviesReducer,
    reviews: ReviewsReducer,
    popular: PopularReducer
})

export default EntitiesReducer;