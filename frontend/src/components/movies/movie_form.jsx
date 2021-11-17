import React from "react";
import MovieSearchDisplay from './movie_search_display'


class MovieForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      search:'',
      title:'Big Fish Big Fish Big Fish Big Fish',
      id:'tt0319061',
      image: "https://imdb-api.com/images/original/MV5BMmU3NzIyODctYjVhOC00NzBmLTlhNWItMzBlODEwZTlmMjUzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.7273_AL_.jpg",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.movieSearch = this.movieSearch.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  }; 

// Handle field updates (called in the render method)
  update(field) {
      return e => this.setState({
          [field]: e.currentTarget.value
      });
  }

// Handle form submission
  handleSubmit(e) {
    if(this.state.search.length === 0){
      const errors = document.getElementById('movieErrors')
      errors.classList.add('display-errors')
    }else{
      e.preventDefault();
      const movie = {
          title:this.state.title ,
          imdb_movie_id:this.state.imdb_movie_id ,
          year: this.state.year , 
          plot: this.state.plot ,
          imdb:this.state.imbd ,
          meta: this.state.meta ,
          poster: this.state.poster ,
          genre: this.state.genre ,
          director: this.state.director ,
          runtime: this.state.runtime ,
          group_id: this.props.match.params.group_id ,
          submitter_id: this.state.user.id,
          similar_movies:this.props.similar_movies,
      }

      this.props.createMovie(movie)
        .then(() => this.props.history.push('/movies'));
    }
  }

  movieSearch(e){
    this.setState({
      search: e.currentTarget.value, 
    })

  }

  sendSearch(){
    this.props.searchMovie(this.state.search)
      .then(res => console.log(res)); 
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div className="movie-form-container">

        <div className="movie-search-bar">
          <h1>Add A Movie</h1>
          <input 
            type="text" 
            value={this.state.search}
            onChange={this.movieSearch}
           />
           <button onClick={this.sendSearch}>Search</button>
        </div>
        <div className="movie-form">

          < MovieSearchDisplay movie={this.state}/>

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
