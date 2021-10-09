const express = require('express');
const passport = require('passport');
const router = express.Router();
// const catchAsync = require()
const User = require('../models/user');
const isLoggedIn = require('../middleware');

router.get('/login', (req, res) => {
    res.send("-1")
})


router.post('/register', async (req, res) => {
    console.log(req.body);
    const {email, username, password} = req.body;
    const user = new User({email, username});
    const newUser = await User.register(user, password).catch((error) => {res.send('-1')})
    req.login(newUser, err => {
        // if(err) return next(err);
        res.send(newUser);
    })
    
});




router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
    const redirectUrl = req.session.returnTo  || '/';
    // res.redirect(redirectUrl);
    // delete req.session.returnTo;
    console.log(req.body);
    res.send({username: req.user.username}) 
})

router.post('/logout', (req, res) => {
    req.logout();
    res.send("logged out")
})


module.exports = router;