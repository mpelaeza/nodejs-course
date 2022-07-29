const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders.controller')

router.get('/', ordersController.index)
module.exports = router;
