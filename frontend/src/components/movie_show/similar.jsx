import React from "react";

class Similar extends React.Component{
    render(){
        let {movie} = this.props
        return(
            <div className="similar-movie-div">
                <h1>{movie.title}</h1>
                <img className="similar-movie-img" src={movie.image} alt=""/>
            </div>
        )
    }
}

export default Similar;