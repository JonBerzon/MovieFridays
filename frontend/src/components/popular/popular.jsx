import React from "react";

class Popular extends React.Component{
    constructor(props){
        super(props)
        this.redirectMovie = this.redirectMovie.bind(this)
    }

    componentDidMount(){
        this.props.getPopular();
    }

    redirectMovie(id){
        this.props.history.push(`/movie-display/${id}`)
    }

    render(){
        if (!this.props.popular.data) return null;
        let { movies } = this.props.popular.data[0]


        return(
            <div className="popular-parent-div">
                <div className="popular-inner-div">
                    <h1>Popular Now</h1>
                    <hr />
                    <div className="popular-movie-list">
                    {
                        movies.map(movie =>{
                            return (
                                <div onClick={() => this.redirectMovie(movie.id)} key={movie.id} className="popular-movie-index">
                                    <img src={movie.image} className="popular-movie-poster" alt="movie poster" />
                                    
                                    <p>{movie.imDbRating} / 10 <span>★</span></p>
                                    <h4>{movie.title}</h4>

                                </div>
                            )
                        })
                    }
                    </div>
                </div>


                

            </div>
        )
    }
}

export default Popular;