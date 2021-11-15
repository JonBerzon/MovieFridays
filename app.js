const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const bodyParser = require("body-parser");
const User = require("./models/User");
const passport = require("passport");
require("dotenv").config();
const db = process.env.REACT_APP_MONGO_URI;
const path = require("path");
const groups = require("./routes/api/groups");
const movies = require("./routes/api/movies");
const reviews = require("./routes/api/reviews");


app.use(express.static("frontend/build"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/groups", groups);
app.use("/api/movies", movies);
app.use("/api/reviews", reviews);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`On port ${port}`));
