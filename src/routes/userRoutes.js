const express = require('express');
const router = express.Router();

const user = require('../controllers/userController')

router.get('/login', user.login)
router.get('/registro', user.register)

module.exports = router