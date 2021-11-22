import React from "react";
import MovieSearchDisplay from './movie_search_display'

class MovieForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search:'',
      searchRes:'',
      title:'',
      id:'',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }; 

// Handle movie submission
  handleSubmit(e) {
    if(this.state.id.length < 1){
      const errors = document.getElementById('movieErrors')
      errors.classList.add('display-errors')
    }else{
      e.preventDefault();
      this.props.fetchMovie(this.state.id)
        .then(res => {

          const movieObj = res.data;
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
            group_id: this.props.groupId, 
            submitter_id: this.props.user.id,
            similar_movies: movieObj.similars
          }
          this.props.createMovie(movie)
            .then(() => this.props.closeModal());
        })
    }
  }

  searchMovies(e){
    this.setState({
      search: e.currentTarget.value, 
    })
  };

  sendSearch(){
    this.props.searchMovie(this.state.search)
      .then(res => {
        this.setState({
          searchRes: res.data.results
        })
      }); 
  };

  selectMovie(movieId){
    this.setState({
      id: movieId
    }); 

    const displays = document.getElementsByName('movieDisplay');
    const selected = document.getElementById(movieId)
    displays.forEach((display)=>{
      if(display.classList.contains('selected')){
        display.classList.remove('selected')
      }
    }); 
    selected.classList.add('selected')
  }

  render() {
    return (
      <div className="movie-form-container">

        <div className="movie-header">
          <h1>Add A Movie</h1>
          <div>
            <input 
              type="text" 
              value={this.state.search}
              onChange={this.searchMovies}
              />
              <button onClick={this.sendSearch}>Search</button>
           </div>
        </div>
        <div className="movie-form">

          <div className="search-results">
            {
              this.state.searchRes ? 
                this.state.searchRes.map(res => (
                  <MovieSearchDisplay selectMovie={() => this.selectMovie(res.id)} movie={res} key={res.id}/> 
                )
              ) : (
                <h1>Search Results</h1>
              )
            }
          </div>

          <div>
            <h1 id="movieErrors" className="hide">You must select a Movie</h1>
            <br />
            <button onClick={this.handleSubmit} >Add Movie</button>
          </div>

        </div>
      </div>
      
    )
  }; 

} 

export default MovieForm;
