import MovieForm from './movie_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createMovie } from '../../actions/movie_actions';
import { searchMovie, fetchMovie } from '../../util/imdb_api_util';

import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
  user: state.session.user,
})

const mDTP = dispatch => ({
  createMovie: movie => dispatch(createMovie(movie)),
  closeModal: () => dispatch(closeModal()), 
  searchMovie: search => searchMovie(search), 
  fetchMovie: movieId => fetchMovie(movieId),
})

export default withRouter(connect(mSTP, mDTP)(MovieForm));