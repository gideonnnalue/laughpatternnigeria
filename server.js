const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const events = require("./routes/api/events");
const members = require("./routes/api/members");

const app = express();

app.use(morgan("dev"));
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// DB Config;
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/events", events);
app.use("/api/members", members);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
