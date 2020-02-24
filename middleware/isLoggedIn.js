module.exports = function(req, res, next) {
    //check if there is not a user
    if(!req.user) {
        //send scathing message 
        req.flash('error', 'You must be logged in to access this page');
        //redirect to the log in page
        res.redirect('/auth/login');
    } else {
        //cary on
        next();
    }
}