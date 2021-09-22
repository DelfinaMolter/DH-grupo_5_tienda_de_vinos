const express = require('express');
const router = express.Router();

//const main = require('../controllers/mainController')
const mainControllerDB = require('../controllers/mainControllerDB');

router.get('/', mainControllerDB.list)
//router.get('/carrito', main.carrito)  




module.exports = router