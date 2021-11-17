import MovieForm from './movie_form';
import { connect } from 'react-redux'
import { createMovie } from '../../actions/movie_actions'
import { searchMovie } from '../../util/imdb_api_util'

import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
  user: state.session.user,
})

const mDTP = dispatch => ({
  createMovie: movie => dispatch(createMovie(movie)),
  closeModal: () => dispatch(closeModal()), 
  searchMovie: search => searchMovie(search)
})

export default connect(mSTP, mDTP)(MovieForm);