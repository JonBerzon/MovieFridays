const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PopularSchema = new Schema({
    movies: []
})

module.exports = Popular = mongoose.model("Popular", PopularSchema);
