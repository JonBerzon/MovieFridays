import React from 'react'; 

const SearchDisplay = (props) => {
  const movieObj = props.movie
  const movieTitle = (movieObj.title.length <= 27) ? movieObj.title : movieObj.title.slice(0,24) + '...' 
  return(
    <div onClick={() => props.selectMovie()} >
      <div className="movie-form-display">
        <div name="movieDisplay" id={movieObj.id}>
          <img src={movieObj.image} alt="MOVIE POSTER" />
          <h1 id="movieTitle">{movieTitle}</h1>
        </div>
      </div>
    </div>
  )

}

export default SearchDisplay; 