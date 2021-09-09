const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body('name').notEmpty().withMessage('Por favor, tienes que escribir el nombre del producto'),
    body('description').notEmpty().withMessage('Por favor, escribe una breve descripcion del producto'),
    body('winery').notEmpty().withMessage('Debes seleccionar una bodega'),
    body('grapes_id').notEmpty().withMessage('Debes seleccionar el tipo de uva'),
    body('wineries_id').notEmpty().withMessage('Debes seleccionar una bodega'),
    body('grapes').notEmpty().withMessage('Debes seleccionar el tipo de uva'),
    body('bottles').notEmpty().withMessage('Debes seleccionar la cantidad de botellas'),
    body('style_wines').notEmpty().withMessage('Debes seleccionar el tipo de vino'),
    body('style_wines_id').notEmpty().withMessage('Debes seleccionar el tipo de vino'),
    body('price').notEmpty().withMessage('Por favor, ingresar un importe'),
    body('img').custom((value, { req }) => {e
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
    // VALIDACIONES DEL FRONT
    /*
    const form = document.querySelector ('form');
    const nameField = form.name;
    const description = form.description;
    const winery = form.winery;
    const grapes_id = form.grapes_id;
    const wineries_id = form.wineries_id
    const grapes = form.grapes;
    const bottles = form.bottles;
    const style_wines = form.style_wines;
    const style_wines_id = form.style_wines_id;
    const price = form.price;
    const img = form.img;
    
    const isEmpty = (field) => {
        return field.value.trim().length
        === 0;
    }
    
    const generateError = (field) => {
        const span = field.nextElementSibling;
        span.innerHTML = message;
        field.classList.add('is-invalid');
    }
    
    form.addEventListener('submit',
    (e) => {
        e.preventDefault();
    
        if(
            isEmpty(nameField) != '' /
            
            isEmpty(description) != '' /
            
            isEmpty(winery) != '' /
    
            isEmpty(grapes) != '' /
    
            isEmpty(bottles) != '' /
    
            isEmpty(style_wines) != '' /
    
            isEmpty(style_wines_id) != '' /
            
            isEmpty(price) != '' /
            
            isEmpty(img) != ''
        ) {
            generateError(nameField, 'El campo Name debe contener al menos un nombre');
            generateError(winery, 'El campo Winery debe contener al menos una bodega');
            generateError(grapes, 'Por favor, selecciona el tipo de uva');
            generateError(bottles, 'Por favor, selecciona la cantidad de botellas');
        }
    })
*/