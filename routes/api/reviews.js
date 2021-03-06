const express = require("express");
const router = express.Router();
const passport = require('passport');
const Review = require('../../models/Review');
const User = require('../../models/User');
const Movie = require('../../models/Movie');
const Group = require('../../models/Group');
const validateReviewInput = require('../../validation/reviews/review')


router.get('/:movie_id', (req, res) => {
    Review.find({ movie_id: req.params.movie_id })
        .then(reviews => res.json(reviews))
        .catch(() => res.status(404).json({ noreviews: "No reviews found" }))
})


router.post('/create', async (req, res) => {
    const { errors, isValid } = validateReviewInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    let movie = await Movie.findOne({ _id: req.body.movie_id }).then(movie => movie)
    let user = await User.findOne({ _id: req.body.user_id }).then(user => user)
    let userCopy = { _id: user.id, username: user.username, avatar: user.avatar }


    if (!user && !movie) {
        return res.status(404).json({ nousermovie: "No user or movie found" })
    } else if (!user) {
        return res.status(404).json({ nouser: "No user found" })
    } else if (!movie) {
        return res.status(404).json({ nomovie: "No movie found" })
    }

    const newReview = new Review({
        rating: req.body.rating,
        body: req.body.body,
        reviewer: { _id: user.id, username: user.username, avatar: user.avatar },
        movie_id: req.body.movie_id
    })
    await Review.findOneAndDelete({ reviewer: userCopy, movie_id: movie._id }).then(res => {
        if (res) {
            movie.num_reviews -= 1,
                movie.cumulative_reviews -= res.rating
        }
    })
    newReview.save()
        .then(review => res.json(review))
        .then(() => {
            movie.num_reviews += 1,
                movie.cumulative_reviews += newReview.rating
            movie.save()
        })
        .catch(() => res.status(400).json({ savefail: "Could not save review" }))
})

router.patch('/update', async (req, res) => {
    const { errors, isValid } = validateReviewInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    let review = await Review.findOne({ _id: req.body._id }).then(review => review)
    let movie = await Movie.findOne({ _id: review.movie_id }).then(movie => movie)
    if (!review) return res.json({ noreview: "No review found" })

    movie.cumulative_reviews -= review.rating


    review.rating = req.body.rating
    review.body = req.body.body
    movie.cumulative_reviews += review.rating
    movie.save()

    review.save()
        .then(review => res.json(review))
        .catch(() => res.status(400).json({ updatefail: "Could not update review" }))
        
})

router.delete('/:id', async (req, res) => {
    let review = await Review.findOne({ _id: req.params.id }).then(review => review)
    let movie = await Movie.findOne({ _id: review.movie_id }).then(movie => movie)

    movie.cumulative_reviews -= review.rating
    movie.num_reviews -= 1,
    movie.save()

    Review.findOneAndDelete({ _id: req.params.id })
        .then(res.json("Success"))
})



module.exports = router;
