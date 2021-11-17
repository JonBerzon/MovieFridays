import React from "react";

class Popular extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getPopular();
    }

    render(){
        if (!this.props.popular.data) return null;
        // let test = Object.values(popular).slice(0,6)
        let { movies } = this.props.popular.data[0]

        // debugger

        // let test = [1,2,3,4,5,6]
        return(
            <div className="popular-parent-div">
                <div className="popular-inner-div">
                    <h1>Popular Now</h1>
                    <hr />
                    <div className="popular-movie-list">
                    {
                        movies.map(movie =>{
                            return (
                                <div key={movie} className="popular-movie-index">
                                    {/* <div className="popular-movie-poster"></div> */}
                                    <img src={movie.image} className="popular-movie-poster" />
                                    
                                    <p>{movie.imDbRating} / 10 <span>★</span></p>
                                    <h4>{movie.title}</h4>

                                    {/* <h4>{ele.title}</h4> */}
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