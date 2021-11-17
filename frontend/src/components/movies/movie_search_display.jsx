import React from 'react'; 

const SearchDisplay = (movie) => {
  const movieObj = movie.movie
  
  const movieTitle = (movieObj.title.length <= 27) ? movieObj.title : movieObj.title.slice(0,24) + '...' 
  return(
    <div>
      <div className="movie-form-display">
        <div>
          <img src={movieObj.image} alt="MOVIE POSTER" />
          <h1 id="movieTitle">{movieTitle}</h1>
        </div>
      </div>
    </div>
  )

}

export default SearchDisplay; 