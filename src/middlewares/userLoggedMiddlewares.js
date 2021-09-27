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

    console.log(req.cookies.user);
    
    //     res.locals.isLogged = false;

//     let loginInCookie = req.cookies.user;
//     let userFromCookie = await db.User.findOne({where: {
//         'user': loginInCookie
//     }});
    
//     if (userFromCookie) {
//         req.session.userLogged = userFromCookie
//     }

//     if (req.session.userLogged){
//         res.locals.isLogged = true;
//         res.locals.userLogged = req.session.userLogged;
//     }
// console.log(emailInCookie,'emailInCookie');
// console.log(loginInCookie,'userFromCookie');
// console.log( res.locals.isLogged,' locals.isLogged');

    next();
    
}


/*const {body} = require('express-validator');
const path = require('path');
const router = require('../routes/mainRoutes');

module.exports = [
body ('Nombre de Usuari@').notEmpty().withMessage('Tienes que ingresar tu usuari@'),
body ('Contraseña').notEmpty().withMessage('Tienes que ingresar una contraseña'),
]*/

module.exports = userLoggedMiddlewares
    