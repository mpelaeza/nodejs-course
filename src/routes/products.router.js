const express = require('express');
const ProductsService = require('../services/product.service')

const ProductsController = require('../controllers/products.controller')
const router = express.Router();
const service = new ProductsService();

// validations
const validatorHandler = require('../middelwares/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema} = require('../schemas/product.schema')


router.get('/', ProductsController.index);

router.get('/:id',
  validatorHandler(getProductSchema, 'params') ,
  ProductsController.show
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  ProductsController.create
);


router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  ProductsController.update
);


router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  ProductsController.destroy
);

module.exports = router;
