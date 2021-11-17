import React from "react";
import Review from "../reviews/review"; /// ACCEPT INCOMING CHANGE
import GroupRatings from "./group_ratings";
import Similar from "./similar";

class MovieShow extends React.Component{
    constructor(props){
        super(props)
    }


    render(){ 
        let similar = [1,2,3,4]
        return(
            <div className="movie-show-parent-div">
                <div className="movie-show-dummy-div"></div>
                <div className="movie-show-main-content-div">
                    <div className="movie-show-left-content">
                        <img src={"https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg"} className="movie-show-poster" />
                        <div className="movie-show-similar-div">
                            <h1>Reccomended Movies</h1>
                            <hr />
                            <div className="movie-show-similar-index">
                                {
                                    similar.map(movie=>{
                                        return <Similar key={movie}/>
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    <div className="movie-show-right-content">
                        <div className="movie-show-right-title">
                            <h1>Inception <span>2010</span> </h1>
                            <hr />
                        </div>
                        <div className="movie-show-movie-stats">
                            <h4>2h 28min</h4>
                            <h4>Action</h4>
                            <h4>Christopher Nolan</h4>
                        </div>
                        <p className="movie-show-plot">Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb&#39;s rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.</p>
                        <GroupRatings />
                        <div className="movie-show-reviews">
                            {
                                similar.map(review =>{
                                    return <Review />
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