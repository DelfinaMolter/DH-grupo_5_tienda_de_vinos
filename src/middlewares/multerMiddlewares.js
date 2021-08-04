const multer = require('multer');
const path = require('path');

const func = (folder) => {
    return  multer.diskStorage({
        destination:(req, file, cb) => {
            cb(null, './public/img/products/' + folder);
        },
        filename:(req, file, cb) => {
            let fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
            cb(null, fileName);
        }
    })
} 

module.exports = func;

