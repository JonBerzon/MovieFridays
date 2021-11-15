const express = require("express");
const router = express.Router();
const passport = require('passport');
const Review = require('../../models/Review');
const User = require('../../models/User');
const Movie = require('../../models/Movie');
const Group = require('../../models/Group');
const validateReviewInput = require('../../validation/reviews/review')


router.get('/:movie_id', (req, res) => {
    Review.find({movie_id: req.params.movie_id})
        .then(reviews => res.json(reviews))
        .catch( () => res.status(404).json({noreviews: "No reviews found"}))
})


router.post('/create', async (req,res) =>{
    const { errors, isValid } = validateReviewInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    let movie = await Movie.findOne({_id: req.body.movie_id }).then(movie => movie)
    let user = await User.findOne({_id: req.body.user_id}).then(user => user)
    
    if (!user && !movie){
        return res.status(404).json({ nousermovie: "No user or movie found" })
    } else if (!user) {
        return res.status(404).json({nouser: "No user found"})
    } else if (!movie){
        return res.status(404).json({ nomovie: "No movie found" })
    }

    const newReview = new Review({
        rating: req.body.rating,
        body: req.body.body,
        reviewer: { _id: user.id, username: user.username, avatar: user.avatar },
        movie_id: req.body.movie_id
    })
    newReview.save()
        .then(review => res.json(review))
        .catch(() => res.status(400).json({savefail: "Could not save review"}))
})

router.patch('/:id', async (req, res) => {
    const { errors, isValid } = validateReviewInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    let review = await Review.findOne({_id: req.params.id}).then(review => review)
    if (!review) return res.json({noreview: "No review found"})

    review.rating = req.body.rating
    review.body = req.body.body
    review.save()
        .then(review => res.json(review))
        .catch(() => res.status(400).json({ updatefail: "Could not update review" }))
})

router.delete('/:id', (req, res) => {
    Review.findOneAndDelete({ _id: req.params.id })
        .then(res.json("Success"))
})



module.exports = router;
