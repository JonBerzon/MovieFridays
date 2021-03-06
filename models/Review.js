const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    body: {
      type: String,
    },
    reviewer: {
      type: Object,
      required: true,
    },
    movie_id: {
      type: Schema.Types.ObjectId,
      ref: "movies",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Review = mongoose.model("Review", ReviewSchema);
