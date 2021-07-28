//Se crea este Middleware de acuerdo a la vista del header de un usuario logueado
const User = require('../models/User');
function userLoggedMiddlewares(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);
    
    
    if (userFromCookie) {
        req.session.userLogged = userFromCookie
    }

    if (req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

   
    

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
    