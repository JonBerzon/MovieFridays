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
      type: Number,
    },
    plot: {
      type: String,
    },
    imdb: {
      type: Number,
    },
    meta: {
      type: Number,
    },
    poster: {
      type: String,
    },
    genre: {
      type: String,
    },
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
  },
  {
    timestamps: true,
  }
);

module.exports = Movie = mongoose.model("Movie", MovieSchema);
