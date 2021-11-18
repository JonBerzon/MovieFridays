import React from "react";
import {Link} from "react-router-dom"

class Similar extends React.Component{
    render(){
        let {movie} = this.props
        return(
            <Link to={`/movie-display/${movie.id}`}>
                <div className="similar-movie-div">
                    <h1>{movie.title}</h1>
                    <img className="similar-movie-img" src={movie.image} alt=""/>
                </div>
            </Link>
        )
    }
}

export default Similar;