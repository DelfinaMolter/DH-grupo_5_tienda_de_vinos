const express = require('express');
const router = express.Router();
const userControllerDB = require('../controllers/userControllerDB')
const multer = require('multer');

// const userController = require('../controllers/userController')

// Middlewares
const validations = require('../middlewares/validationRegisterMiddlewares');
const guestMiddlewares = require('../middlewares/guestMiddlewares');
const uploadFile = require('../middlewares/multerMiddlewares')
const notAdminMiddleware = require('../middlewares/notAdminMiddleware')

const upload = multer({storage:uploadFile('users')});


// router.get('/', userController.users)
router.get('/', notAdminMiddleware, userControllerDB.list);
// router.get('/perfil', userController.profile)
router.get('/perfil/:id', userControllerDB.detail);

// router.get('/registro', guestMiddlewares, userController.register)
router.get("/registro", guestMiddlewares, userControllerDB.register);
// router.post('/registro',[upload.single('img'), validations], userController.processRegister);
router.post("/registro",[ upload.single('img'), validations], userControllerDB.processRegister);

// router.get('/login', guestMiddlewares, userController.login)
router.get('/login', guestMiddlewares, userControllerDB.login)
// router.post('/login', userController.loginProcess)
router.post('/login', userControllerDB.loginProcess);

router.get('/logout', userControllerDB.logoutProcess);

router.get('/edit/:id', userControllerDB.edit);
router.put('/update/:id', userControllerDB.update);





module.exports = router