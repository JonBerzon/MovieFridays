# Movie Fridays
[Live Site Link](https://moviefridays.herokuapp.com/)

# Overview
Movie Fridays is a movie based social media site that allows you to create groups for your friends and family to view and rate movies together. The website is split into multiple pages, which include:
+ A group index page that displays all available groups and gives you the option to view, join, or create your own group.

+ A group show page that displays all movies that users in your group have seen, rated, and reviewed. You will also have the option on this page to add a new movie, or filter existing movies by a number of categories.

+ A movie show page that displays all information about the movie that has been collected from the IMDb API. Information about similar movies was also collected. On this page you have the option to add, edit, or delte an existing review.

The backend for Movie Fridays was built using Node.js, Express.js, and MongoDB for the database. The frontend was built using React, Redux, and SCSS. The site utilized the IMDb API (https://imdb-api.com/) for both searching for movies with a given title and displaying information about the movie based off search results.


# Features
## Movie Searching and Displaying
On Movie Fridays, users have the ability to search for their favorite movies and add them to their groups show page. This is accomplished by utilizing multiple API calls to the IMDb API. The first API call is a search through IMDB's database. Search results are displayed with its available poster to reduce user confusion and give them a visual aid to select the correct movie. The second API call is cast after the user selects the searched movie, which we then use to pull the entirety of IMDB's information about said movie to add to our database. Modals were utilized to create a better UI experience for the user. 

```Javascript
  handleSubmit(e) {
      this.props.fetchMovie(this.state.id)
        .then(res => {
          const movieObj = res.data;
          this.props.createMovie(movieObj)
            .then(() => this.props.closeModal());
        })
    }
  }

  searchMovies(e){
    this.setState({ search: e.currentTarget.value })};

  sendSearch(){
    this.props.searchMovie(this.state.search)
      .then(res => { this.setState({ searchRes: res.data.results })
      }); 
  };

  selectMovie(movieId){
    this.setState({ id: movieId });
```

<img src="assets/gifs/MF_Movie_Search_Display_GIF.gif" width="" height="" />
## Multiple CRUD Cycles
Movie Fridays utilizes multiple crud cycles to create a powerful experience for the user. Users can add movies, as mentioned above, through API search and select methods The user who submitted the movie as well as the group admin have the ability to delete movies from the group if desired. Reviews follow a similar cycle and are able to be created, edited, and deleted by the appropiate user, utilizing reusable modal forms to create a seemeless experience. Groups also follow the same ideology and can be created, edited, or deleted. Functionality was given that if the user who leaves a group is an admin, they must designate the next admin before leaving the group. If the last user leaves the group, the group is destroyed.

