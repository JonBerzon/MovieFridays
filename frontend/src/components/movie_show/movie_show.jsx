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
        if (Object.values(this.props.groups).length === 0) return null;
        let { movie, reviews, groups } = this.props
        let ourGroup = Object.values(groups).filter(group => movie.group_id === group._id)
        let reviewArr = Object.values(reviews).filter(review => review.movie_id === movie._id)
        const groupId = this.props.movie.group_id
        const members = this.props.groups[groupId].users.map(obj =>  {
            return obj._id;
        });
        let {similar_movies} = movie
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
                    <ModalButtonContainer modalType={{type:'review', movieId: this.props.movie._id}} />
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
                                    return <Review key={review} review={review}/>
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