const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const keys = require("./config/keys");
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Connected to DB"))
  .catch((err) => console.log("Failed to connect to DB", err));

let User = require("./models/user");

app.use(express.urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "Blah Blah Blah",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize()); //start a session
app.use(passport.session()); //allows access to the session
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); //stores User object in session
passport.deserializeUser(User.deserializeUser()); //removes User object from session

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/newsfeed", isLoggedIn, (req, res) => {
  res.render("newsfeed.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.post("/signup", (req, res) => {
  let newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render("signup.ejs");
    } else {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/newsfeed");
      });
    }
  });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/newsfeed",
    failureRedirect: "/login"
  })
);

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

//Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
