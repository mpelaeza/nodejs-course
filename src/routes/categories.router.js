const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/categories.controller')

router.get('/', CategoriesController.index)
router.get('/:id', CategoriesController.show)
router.post('/', CategoriesController.create)
router.patch('/:id', CategoriesController.update)
router.delete('/:id', CategoriesController.destroy)

module.exports = router;
