module.exports = (req,res,next) => req.user && req.session.user ? req.session.user.isAdmin ? next() : res.redirect('/') : res.redirect('/users/login')