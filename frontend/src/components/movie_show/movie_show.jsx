import React from "react";
import Review from "../reviews/review";
import GroupRatings from "./group_ratings";
import Similar from "./similar";
import ModalButtonContainer from '../modal/modal_button_container';
import NavbarContainer from '../navbar/navbar_container'

import Sidebar from "../sidebar/sidebar";



class MovieShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.movieId)
        this.props.fetchReviews(this.props.match.params.movieId)
            
    }

    componentDidUpdate(prevProps){
        if (this.props.movie !== prevProps.movie){
            this.props.fetchGroup(this.props.movie.group_id)
        }
    }

    render() {
        let similar = [1, 2, 3, 4]
        if (!this.props.movie || !this.props.reviews) return null;
        // if (Object.values(this.props.movie).length < 1 ) return null;
        if (Object.values(this.props.groups).length === 0) return null;
        let { movie, reviews, groups } = this.props
        let ourGroup = Object.values(groups).filter(group => movie.group_id === group._id)
        let reviewArr = Object.values(reviews).filter(review => review.movie_id === movie._id)
        const groupId = this.props.movie.group_id
        const members = this.props.groups[groupId].users.map(obj =>  {
            return obj._id;
        });

        const movieObject = {
          directorList: ["Peter Jackson"],
          fullTitle: "The Lord of the Rings: The Fellowship of the Ring (2001)",
          genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
          id: "tt0120737",
          imDbRating: "8.8",
          imDbRatingVotes: "1684517",
          image: "https://imdb-api.com/images/original/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6791_AL_.jpg",
          metacriticRating: "92",
          plot: "An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it. However, he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir, and his three Hobbit friends Merry, Pippin, and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign.",
          runtimeStr: "2h 58mins",
          similars:[{starwars:'starwars'},{starwars:'starwars'},{starwars:'starwars'},{starwars:'starwars'},{starwars:'starwars'},],
          tagline: "Even the smallest person can change the course of the future.",
          title: "The Lord of the Rings: The Fellowship of the Ring",
          year: "2001"
        }
        // console.log(members)
        // console.log(this.props.currentUser.id)
        let {similar_movies} = movie
        let yourReview = reviewArr.filter(review => review.reviewer._id === this.props.currentUser.id)
        return (
            <div className="movie-show-parent-div">
                {
                this.props.movie ? (
                    <Sidebar display="show" currentUser={this.props.currentUser} groups={this.props.groups[this.props.movie.group_id]} />
                ) : (
                    null
                )
                }
                
                {
                  members.includes(this.props.currentUser.id) ? (
                    <ModalButtonContainer modalType={{type:'movieDisplay', movieId: this.props.movie._id, movieObj: movieObject }} />
                    // members.includes(this.props.currentUser.id) && (yourReview.length === 0) ? (
                    // <ModalButtonContainer modalType={{type:'review', movie: this.props.movie}} />
                  ) : (
                    null
                  )
                }
                <NavbarContainer />
                <div className="movie-show-dummy-div"></div>

                <div className="movie-show-main-content-div">
                    <div className="movie-show-left-content">
                        <img src={movie.poster} className="movie-show-poster" />
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
                            <h4>{movie.runtime}</h4>
                            <h4>{movie.genre[0]}</h4>
                            <h4>{movie.director}</h4>
                        </div>
                        <p className="movie-show-plot">{movie.plot.split("&#39;").join("'")}</p>
                        <GroupRatings reviews={reviewArr} group={ourGroup[0]} />
                        <div className="movie-show-reviews">
                            {
                                reviewArr.map(review => {
                                    return <Review key={review} review={review} openModal={this.props.openModal} movie={this.props.movie} currentUser={this.props.currentUser}/>
                                })
                            }

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default MovieShow;