const express = require("express");
const router = express.Router();
const Movie = require('../../models/Movie');
const passport = require('passport');
const validateCreateMovies = require('../../validation/movies/create')




router.get('/:group_id', (req,res) => {
    Movie.find({group_id: req.params.group_id})
        .then(movies => res.json(movies))
        .catch(() => res.status(404).json({nomovies: "No movies found"}))
}) 

router.get('/show/:movie_id', (req,res) => {
    Movie.findOne({_id: req.params.movie_id})
        .then(movie => res.json(movie))
        .catch(() => res.status(404).json({ nomovie: "No movie found" }))
})

router.post('/:group_id', (req,res) => {
    const { errors, isValid } = validateCreateMovies(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newMovie = new Movie({
        title: req.body.title,
        imdb_movie_id: req.body.imdb_movie_id,
        year: req.body.year,
        plot: req.body.plot,
        imdb: req.body.imdb,
        meta: req.body.meta,
        poster: req.body.poster,
        genre: req.body.genre,
        director: req.body.director,
        runtime: req.body.runtime,
        group: req.params.group_id,
        submitter: req.body.user_id,
    })
    newMovie.save()
        .then(movie => res.json(movie))
})

router.delete('/:id', (req, res) => {
    Movie.findOneAndDelete({ _id: req.params.id })
        .then(res.json("Success"))
})



module.exports = router;
