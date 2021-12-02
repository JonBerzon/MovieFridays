# Movie Fridays
[Live Site Link](https://moviefridays.herokuapp.com/)

# Overview
Movie Fridays is a movie based social media site that allows you to create groups for your friends and family to view and rate movies together. The website is split into multiple pages, which include:
+ A group index page that displays all available groups and gives you the option to view, join, or create your own group.

+ A group show page that displays all movies that users in your group have seen, rated, and reviewed. You will also have the option on this page to add a new movie, or filter existing movies by several categories.

+ A movie show page that displays all information about the movie that has been collected from the IMDb API. Information about similar movies was also collected. On this page you have the option to add, edit, or delete an existing review.

# Technologies Used
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

<img src="assets/gifs/MF_display_create_show_movie.gif" width="" height="" />

## Multiple CRUD Cycles
Movie Fridays utilizes multiple crud cycles to create a powerful experience for the user. Users can add movies, as mentioned above, through API search and select methods The user who submitted the movie as well as the group admin have the ability to delete movies from the group if desired. Reviews follow a similar cycle and are able to be created, edited, and deleted by the appropriate user, utilizing reusable modal forms to create a seamless experience. Groups also follow the same ideology and can be created, edited, or deleted. Functionality was given that if the user who leaves a group is an admin, they must designate the next admin before leaving the group. If the last user leaves the group, the group is destroyed.

```Javascript
Group CRUD Preview

router.get("/", (req, res) => {
  Group.find()
    .then(groups => res.json(groups))
    .catch(() => res.status(404).json({ nogroupsfound: "No groups found" }));
});

router.get("/:id", (req, res) => {
  Group.findOne({ _id: req.params.id })
    .then(group => res.json(group))
    .catch(() => res.status(404).json({ nogroupfound: "No group found with that id" }));
});

router.post("/create", async (req, res) => {
    const { errors, isValid } = validateCreateInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const user = await User.findOne({ _id: req.body.owner_id }).then(
      user => user
    );

    const newGroup = new Group({
      name: req.body.name,
      owner: { _id: user.id, username: user.username, avatar: user.avatar },
      users: [{ _id: user.id, username: user.username, avatar: user.avatar }],
    });

    newGroup.save().then(group => res.json(group));
  }
);
```
<img src="assets/gifs/Review-CRUD.gif" width="" height="" />


## Movie Recommendations
The Movie Fridays team understands how hard it is to pick a movie sometimes, so with that in mind we added a number of features to aid the user in finding a new movie to watch. When reaching the splash page after logging in, the user will be met with a navbar displaying the six most popular movies, pulled from IMDb's API for current top movies. Upon clicking on one of the top movies, you'll be redirected to a movie display page where you can read up on the plot, runtime, genre, etc. and have a button available to add it to one of your groups.

In addition to top movies, we decided to add a section for similar movies on each movie page to help users find recommendations for their favorite movies. As with top movies, users can click similar movies to be redirected to a page with the recommended movies details and have the option to add it to any of their groups.

```Javascript
export const fetchPopular = () => {
    return axios.get(`https://imdb-api.com/en/API/MostPopularMovies/${IMDB}`)
}

class Similar extends React.Component{
    render(){
        let {movie} = this.props
        return(
            <Link to={`/movie-display/${movie.id}`}>
                <div className="similar-movie-div">
                    <h1>{movie.title}</h1>
                    <img className="similar-movie-img" src={movie.image} alt="similar-poster"/>
                </div>
            </Link>
        )
    }
}
```
<img src="assets/gifs/Movie-Recommendation.gif" width="" height="" />

# Meet the Team
Maisie Bruno-Tyne: Lead Designer & Frontend Engineer
Albert Kim: Frontend Engineer
Yehuda Goldschein: Backend Lead
Jonathan Berzon: Flex Lead

