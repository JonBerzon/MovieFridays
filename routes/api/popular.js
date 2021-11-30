const express = require("express");
const router = express.Router();
const Popular = require("../../models/Popular");


router.get("/", (req, res) => {
    Popular.find()
        .then(popular => res.json(popular))
})

router.post("/create", async (req,res) => {
    let movies = Object.values(req.body.data.items).slice(0,6)

    if (movies.length < 5){
        res.status(404).json("Popular movies not found")
    } else {
        await Popular.deleteMany({})
        const newPopular = new Popular({
            movies: movies
        })
        newPopular.save().then( () => res.json("success"));
    }   
})




module.exports = router;
