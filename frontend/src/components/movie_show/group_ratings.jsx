import React from "react";

class GroupRatings extends React.Component{

    
    render(){
        let {reviews, group, movie} = this.props
        let metacritic = movie.meta ? movie.meta : "N/A"
        let imdb = movie.imdb ? movie.imdb : "N/A"
        let groupRating;
        if (movie.num_reviews) {
            groupRating =
                movie.cumulative_reviews / movie.num_reviews;
            groupRating =
                groupRating % 1 !== 0 ? groupRating.toFixed(1) : groupRating;
        } else {
            groupRating = "?";
        }

        return(
            <div className="group-ratings-div">
                <div className="group-ratings-top-div">
                    <h1>{group.name}</h1>
                    <h2>IMDb: <span>{imdb} / 10</span></h2>
                    <h2>Metacritic: <span>{metacritic} / 100</span></h2>
                    <h2>Group Rating: <span>{groupRating} / 10</span></h2>
                </div>
                <hr />
                <div className="group-ratings-flex">
                    {
                        reviews.map(review =>{
                            return(
                                <div key={review._id} className="tester">
                                    <div className="group-ratings-index">
                                        <h1>{review.reviewer.username}</h1>
                                        <div className="group-rating-circle">
                                            <h5>{review.rating}/10</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default GroupRatings;