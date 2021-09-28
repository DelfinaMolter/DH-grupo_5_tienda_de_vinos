module.exports = (req,res,next) => {
    // let user = req.session.user
    // res.locals.user = user ? user: null;
    next();
}