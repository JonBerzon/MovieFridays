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
          movie: ''
        }
      this.getUserGroups = this.getUserGroups.bind(this);
    }

    componentDidMount() {
      this.props.fetchGroups();
      this.props.fetchMovie(this.props.match.params.movieId)
        .then(res => 
          this.setState({
            movie: res.data
          })); 
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

    render() {
      let similar = [1, 2, 3, 4]
      const movie = this.state.movie;

      if(movie && (Object.values(this.props.groups).length > 0)){
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
                                    similar_movies.map(movie => {
                                        return <Similar key={movie} movie={movie} />
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
          <div></div>
        )
      }
    }
}

export default MovieDisplay;