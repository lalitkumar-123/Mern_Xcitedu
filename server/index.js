const express = require("express");
const app = express();

const mongoose = require("mongoose");
const passport = require('passport');
const session = require('express-session')
const LocalStrategy = require('passport-local');
const cors = require('cors');
var fileUpload = require('express-fileupload');


const User = require('./models/user')

app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, createParentPath : true}));
const usersRoutes = require('./routes/user');
const landingPageRoutes = require('./routes/landingpage')


mongoose.connect("mongodb+srv://XciteduUser1:cVhfL8anuYa7L3FB@xcitedumain.xer3m.mongodb.net/Xcitedu?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
useNewUrlParser: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: database"));
db.once("open", function(){
    console.log("Database connected");
})

const sessionConfig =  {
    secret: "This is the secret to encode and decode sessions",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session(sessionConfig))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.static("assets"));



passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const { isLoggedIn } = require('./middleware');

//###############  User #############

app.use('/', usersRoutes)

// ##############  landingPage #########

app.use('/', landingPageRoutes)

app.get('/home', isLoggedIn, (req, res) => {
    res.send('home page' + req.user)
})


app.listen(5000, function() {
    console.log("Xcitedu server started");
});