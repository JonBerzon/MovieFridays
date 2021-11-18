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
      group_id:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }; 

// Handle movie submission
  handleSubmit() {
    if(this.state.group_id.length < 1){
      const errors = document.getElementById('movieErrors')
      errors.classList.add('display-errors')
    }else{
      const movieObj = this.props.movieObj;
      const movie = {
        title: movieObj.title,
        imdb_movie_id: movieObj.id,
        year: movieObj.year,
        plot: movieObj.plot,
        imdb: movieObj.imDbRating,
        meta: movieObj.metacriticRating,
        poster: movieObj.image,
        genre: movieObj.genreList.map(genre => genre.value),
        director: movieObj.directorList[0].name,
        runtime: movieObj.runtimeStr,
        group_id: this.state.group_id, 
        submitter_id: this.props.user.id,
        similar_movies: movieObj.similars
      }
      console.log(movie)
      this.props.createMovie(movie)
        .then(() => this.props.closeModal());
    }
  };

  update(field) {
      return e => this.setState({
          [field]: e.currentTarget.value
      });
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    const movie = this.props.movieObj; 
    return (
      <div className="movie-display-form-container">
        <div>
          <img src={movie.image} alt="Movie poster"/>
          <div className="movie-details-container">

          <div className="group-dropdown">
            <select id="selectGroup" onChange={this.update('group_id')}>
            <option selected disabled value="">Select a group</option>
            {
              this.props.userGroups.map(group => {
                return(
                  <option value={group._id}>{group.name}</option>
                )
              })
            }
            </select>
          </div> 

            <h1>{movie.title}</h1>
            <div className="movie-display-details">
              <h3>{movie.directorList[0].name}</h3>
              <h3>{movie.year}</h3>
              <h3>{movie.runtimeStr}</h3>
            </div>
            <p>{movie.tagline}</p>
          </div>
        </div>

        <div>
          <h1 id="movieErrors" className="hide">You must select a group</h1>
          <br />
          <button onClick={this.handleSubmit}>Add Movie</button>
        </div>

      </div>
    )
  }; 

} 

export default MovieDisplayForm;