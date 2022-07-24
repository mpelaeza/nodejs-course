const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controller')

router.get('/', UsersController.index)
router.get('/:id', UsersController.show)
router.post('/', UsersController.create)
router.patch('/:id', UsersController.update)
router.delete('/:id', UsersController.destroy)

module.exports = router;
