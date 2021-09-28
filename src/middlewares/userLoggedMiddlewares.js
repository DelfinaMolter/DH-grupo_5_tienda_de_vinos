//Se crea este Middleware de acuerdo a la vista del header de un usuario logueado
// const User = require('../models/User');
const db = require('../database/models');

async function userLoggedMiddlewares(req, res, next) {

    res.locals.isLogged = false
    
    if (req.cookies.user) {
        let userInCookie = await db.User.findOne({where: {
            'user': req.cookies.user
        }});
        req.session.userLogged = userInCookie
    }

    if (req.session.userLogged) {
        res.locals.isLogged = req.session.userLogged
    }

    next();
    
}

module.exports = userLoggedMiddlewares
    