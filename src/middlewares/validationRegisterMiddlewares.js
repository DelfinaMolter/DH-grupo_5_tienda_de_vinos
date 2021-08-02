const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body('first_name').notEmpty().withMessage('Tienes que escribir tu nombre'),
    body('last_name').notEmpty().withMessage('Tienes que escribir tu apellido'),
    body('dni').notEmpty().withMessage('Tienes que escribir tu dni'),
    body('birthDate').notEmpty().withMessage('Tienes que escribir tu fecha de nacimiento'),
    body('email').notEmpty().withMessage('Tienes que escribirt un mail').bail()
    .isEmail().withMessage('Tienes que escribir un correo válido'),
    body('user').notEmpty().withMessage('Tienes que escribir un usuario'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('img').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.gif', '.png'];

        if(!file){
            throw new Error('Tienes que subir una imagen')
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`) 
            }
        }
        return true
    })
    ]

