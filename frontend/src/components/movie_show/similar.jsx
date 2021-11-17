import React from "react";

class Similar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="similar-movie-div">
                <h1>Interstellar</h1>
                <img className="similar-movie-img" src="https://imdb-api.com/images/original/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg" />
            </div>
        )
    }
}

export default Similar;