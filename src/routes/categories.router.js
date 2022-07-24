const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/categories.controller')

router.get('/', CategoriesController.index)

module.exports = router;
