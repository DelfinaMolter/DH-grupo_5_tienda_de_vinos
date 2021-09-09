const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body('name').notEmpty().withMessage('Por favor, tienes que escribir el nombre del producto'),
    body('description').notEmpty().withMessage('Por favor, escribe una breve descripcion del producto'),
    body('winery').notEmpty().withMessage('Debes seleccionar una bodega'),
   //body('grapes_id').notEmpty().withMessage('Debes seleccionar el tipo de uva'),
   // body('wineries_id').notEmpty().withMessage('Debes seleccionar una bodega'),
    body('grapes').notEmpty().withMessage('Debes seleccionar el tipo de uva'),
    body('bottles').notEmpty().withMessage('Debes seleccionar la cantidad de botellas'),
    body('style_wines').notEmpty().withMessage('Debes seleccionar el tipo de vino'),
    //body('style_wines_id').notEmpty().withMessage('Debes seleccionar el tipo de vino'),
    body('price').notEmpty().withMessage('Por favor, ingresar un importe'),
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
