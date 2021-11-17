const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imdb_movie_id: {
      type: String,
      required: true,
    },
    year: {
      type: String,
    },
    plot: {
      type: String,
    },
    imdb: {
      type: String,
    },
    meta: {
      type: String,
    },
    poster: {
      type: String,
    },
    genre: [],
    director: {
      type: String,
    },
    runtime: {
      type: String,
    },
    group_id: {
      type: Schema.Types.ObjectId,
      ref: "groups",
    },
    submitter_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    num_reviews: {
      type: Number
    },
    cumulative_reviews: {
      type: Number
    },
    similar_movies: [{type: Object}]
  },
  {
    timestamps: true,
  }
);

module.exports = Movie = mongoose.model("Movie", MovieSchema);
