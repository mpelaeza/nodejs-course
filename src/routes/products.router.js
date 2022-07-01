const express = require('express');
const ProductsService = require('../services/product.service')

const router = express.Router();
const service = new ProductsService();
const validatorHandler = require('../middelwares/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema} = require('../schemas/product.schema')


router.get('/', (req, res, next) => {
  service.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch( error => {
      next(error)
    } )
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params') ,
  (req, res, next) => {
    const { id } = req.params;
    const { msg } = req.query;
    console.log(msg)
    service.findOne(id)
      .then(({productIndex, product}) => {
        res.json(product);
      })
      .catch(error => {
        next(error);
      })
  });

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  (req, res, next) => {
  const body = req.body;
  service.create(body)
    .then(product => {
      res.status(201).json({
        message: 'created',
        data: body
      })
    })
    .catch( error => {
      next(error)
    } )
});


router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  service.update(id, body)
    .then(product => {
      res.json({
        message: 'updated',
        data: product
      })
    })
    .catch( error => {
      next(error)
    } )
});


router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  (req, res, next) => {
  const { id } = req.params;
  service.delete(id)
    .then( product => {
      res.json({
        message: 'deleted',
        data: product
      })
    })
    .catch(error => {
      next(error)
    })
});

module.exports = router;
