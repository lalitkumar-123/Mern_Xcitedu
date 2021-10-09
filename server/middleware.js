module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        // req.session.returnTo = req.originalUrl;
        return res.send('-1');
    }
    next();
}