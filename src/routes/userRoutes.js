const express = require('express');
const router = express.Router();

const user = require('../controllers/userController')

router.get('/login', user.login)
router.get('/registro', user.register)
router.get('/users', user.users)
router.get('/profile', user.profile)

module.exports = router