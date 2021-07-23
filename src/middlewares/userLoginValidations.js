const {body} = require('express-validator');
const path = require('path');
const router = require('../routes/mainRoutes');

module.exports = [
body ('Nombre de Usuari@').notEmpty().withMessage('Tienes que ingresar tu usuari@'),
body ('Contraseña').notEmpty().withMessage('Tienes que ingresar una contraseña'),
]


    