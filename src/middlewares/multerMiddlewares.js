const multer = require('multer');
const path = require('path');
const { nextTick } = require('process');
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, './public/img/products/wines');
    },
    filename:(req, file, cb) => {
        let fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
})

const upload = multer({storage});

module.exports = upload;