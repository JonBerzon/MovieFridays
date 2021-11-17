import React from "react";
import MovieShow from "./movie_show";

class Similar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {movie} = this.props
        return(
            <div className="similar-movie-div">
                <h1>{movie.title}</h1>
                <img className="similar-movie-img" src={movie.image}/>
            </div>
        )
    }
}

export default Similar;