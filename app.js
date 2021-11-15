const express = require("express");
const app = express();
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const User = require('./models/User')
const passport = require('passport')
require("dotenv").config();
const db = process.env.REACT_APP_MONGO_URI


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(process.env));
