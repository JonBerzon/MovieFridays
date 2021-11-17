import React from "react";
import MovieSearchDisplay from './movie_search_display'




class MovieForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search:'',
      searchRes:[
          {description: "(2003)",
          id:'tt0319061',
          image: "https://imdb-api.com/images/original/MV5BMmU3NzIyODctYjVhOC00NzBmLTlhNWItMzBlODEwZTlmMjUzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.7273_AL_.jpg",
          resultType: "Title",
          title: "Big Fish"},

          {description: "(2012)",
          id: "2",
          image: "https://imdb-api.com/images/original/MV5BMTA5MjE3NzM3NzZeQTJeQWpwZ15BbWU3MDUxNTc4NDk@._V1_Ratio0.7273_AL_.jpg",
          resultType: "Title",
          title: "Big Fish",},

          {description: "(2003)",
          id: "3",
          image: "https://imdb-api.com/images/original/MV5BMmU3NzIyODctYjVhOC00NzBmLTlhNWItMzBlODEwZTlmMjUzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.7273_AL_.jpg",
          resultType: "Title",
          title: "Big Fish"},

          {description: "(2012)",
          id: "4",
          image: "https://imdb-api.com/images/original/MV5BMTA5MjE3NzM3NzZeQTJeQWpwZ15BbWU3MDUxNTc4NDk@._V1_Ratio0.7273_AL_.jpg",
          resultType: "Title",
          title: "Big Fish",},

          {description: "(2003)",
          id: "5",
          image: "https://imdb-api.com/images/original/MV5BMmU3NzIyODctYjVhOC00NzBmLTlhNWItMzBlODEwZTlmMjUzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.7273_AL_.jpg",
          resultType: "Title",
          title: "Big Fish"},

          {description: "(2012)",
          id: "6",
          image: "https://imdb-api.com/images/original/MV5BMTA5MjE3NzM3NzZeQTJeQWpwZ15BbWU3MDUxNTc4NDk@._V1_Ratio0.7273_AL_.jpg",
          resultType: "Title",
          title: "Big Fish",},
          ],
      title:'Big Fish Big Fish Big Fish Big Fish',
      id:'tt0319061',
      image: "https://imdb-api.com/images/original/MV5BMmU3NzIyODctYjVhOC00NzBmLTlhNWItMzBlODEwZTlmMjUzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_Ratio0.7273_AL_.jpg",

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }; 

// Handle form submission
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
            group_id: '6192a40bfed6ea72b5b55403', // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NEED TO CHANGE TO BE DYNAMIC
            submitter_id: this.props.user.id,
            similar_movies: movieObj.similars
          }
          console.log(movie)
          this.props.createMovie(movie)
            .then(() => this.props.history.push('/groups'));
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
    console.log(selected)
    selected.classList.add('selected')
  }

  render() {
    console.log(this.props)
    console.log(this.state)
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
