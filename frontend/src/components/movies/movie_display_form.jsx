import React from "react";
import MovieSearchDisplay from './movie_search_display'

class MovieDisplayForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search:'',
      searchRes:'',
      title:'',
      id:'',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }; 

// Handle movie submission
  handleSubmit() {
    const movieObj = this.props.movieObj;
    const movie = {
      title: movieObj.title,
      imdb_movie_id: movieObj.id,
      year: movieObj.year,
      plot: movieObj.plot,
      imdb: movieObj.imDbRating,
      meta: movieObj.metacriticRating,
      poster: movieObj.image,
      genre: movieObj.genres,
      director: movieObj.directorList[0],
      runtime: movieObj.runtimeStr,
      group_id: this.props.groupId, 
      submitter_id: this.props.user.id,
      similar_movies: movieObj.similars
    }
    console.log(movie)
    this.props.createMovie(movie)
      .then(() => this.props.closeModal());
  };

  render() {
    console.log(this.props)
    const movie = this.props.movieObj; 
    return (
      <div className="movie-display-form-container">
        <div>
          <img src={movie.image} alt="Movie poster"/>
          <div className="movie-details-container">
            <h1>{movie.title}</h1>
            <div className="movie-display-details">
              <h3>{movie.directorList[0]}</h3>
              <h3>{movie.year}</h3>
              <h3>{movie.runtimeStr}</h3>
            </div>
            <p>{movie.tagline}</p>
          </div>
        </div>

        <div>
          <h1 id="movieErrors" className="hide">You must select a Movie</h1>
          <br />
          <button onClick={this.handleSubmit}>Add Movie</button>
        </div>

      </div>
    )
  }; 

} 

export default MovieDisplayForm;