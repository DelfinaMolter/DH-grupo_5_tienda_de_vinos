const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productsApiController');

router.get('/detail/:id', productsApiController.show);

module.exports = router;