import React from "react";
import Review from "../reviews/review";
import ModalButtonContainer from '../modal/modal_button_container'
import Similar from "../movie_show/similar";
import NavbarContainer from '../navbar/navbar_container'
import Sidebar from "../sidebar/sidebar";


class MovieDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          movie: '',
          validImage: null,
          // validContent: null,
        }
      this.getUserGroups = this.getUserGroups.bind(this);
      this.checkImage = this.checkImage.bind(this); 
      this.validMovie = this.validMovie.bind(this);
    }

    componentDidMount() {
      console.log("component did mount")
      this.props.fetchGroups();
      this.props.fetchMovie(this.props.match.params.movieId)
        .then(res => 
          this.setState({
            movie: res.data
          }))
          .then(() => this.validMovie(this.state.movie)); 
    }

    componentDidUpdate(prevProps, prevState){
      if (this.props.match.params.movieId !== prevProps.match.params.movieId){
        this.props.fetchMovie(this.props.match.params.movieId)
          .then(res => {
            this.setState({
              movie: res.data
            })
          })
      }
    }

    getUserGroups() {
      let list = [];
      Object.values(this.props.groups).map(group => {
        group.users.map(user => {
            if (user._id === this.props.currentUser.id) {  
              list.push(group) 
            }    
          })
        }
      )
      return list; 
    }

    async checkImage(url){
      let valid = true;
      try {
        let response = await fetch(url)
          .then(response => {
            valid = true; 
          });
      }
      catch(error){
        valid = false;
      }
      return valid;
    }

    validMovie(movie){
      this.checkImage(movie.image)
        .then(res => {
          this.setState({
              validImage: res,
            })
          });
    }

    validContent(movie){
      let validContent = null;

      if(movie){
          if (
            movie.type == "TVSeries" ||
            movie.directorList.length === 0 ||
            !movie.title ||
            !movie.plot ||
            movie.similars.length === 0 || 
            movie.genreList.length === 0
          ){
            validContent = false;
          }else{
            validContent = true;
          };
        }
        return validContent

    }


    render() {
      const movie = this.state.movie;
      
      if(movie && this.state.validImage && this.validContent(movie) && (Object.values(this.props.groups).length > 0)){
        let similar_movies = movie.similars.slice(0,4);
        return (
            <div className="movie-show-parent-div">
                <ModalButtonContainer modalType={{type:'movieDisplay', movieObj: this.state.movie, userGroups: this.getUserGroups() }} />
      
                <Sidebar
                  display="group"
                  currentUser={this.props.currentUser}
                  groups={Object.values(this.props.groups)}
                />

                <NavbarContainer />
                <div className="movie-show-dummy-div"></div>
                <div className="movie-show-main-content-div">
                    <div className="movie-show-left-content">
                        <img src={movie.image} className="movie-show-poster" />
                        <div className="movie-show-similar-div">
                            <h1>Recommended Movies</h1>
                            <hr />
                            <div className="movie-show-similar-index">
                                {
                                    similar_movies.map((movie, idx) => {
                                      return <Similar key={idx} movie={movie} redirectMovie={this.redirectMovie}/>
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    <div className="movie-show-right-content">
                        <div className="movie-show-right-title">
                            <h1>{movie.title}<span>{movie.year}</span> </h1>
                            <hr />
                        </div>
                        <div className="movie-show-movie-stats">
                            <h4>{movie.runtimeStr}</h4>
                            <h4>{movie.genreList[0].value}</h4>
                            <h4>{movie.directorList[0].name}</h4>
                        </div>
                        <p className="movie-show-plot">{movie.plot.split("&#39;").join("'")}</p>

                    </div>
                </div>
            </div>
        )
      }else{
        return(
          <div className="no-movie-content">
          <div>
            <h1>OOPS!</h1>
            <p>Looks like this movie doesn't have much content yet, sometimes if the movie is really new our API won't have enough content for us to add it to a group.</p>
            <p>Try back later and hopefully it will have been updated.</p>
          </div>
          </div>
        )
      }
    }
}

export default MovieDisplay;