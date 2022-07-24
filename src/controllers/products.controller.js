const ProductsService = require('../services/product.service')
const service = new ProductsService();

const index = (req, res, next) => {
  service.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch( error => {
      next(error)
    } )
}

const show = (req, res, next) => {
  const { id } = req.params;
  const { msg } = req.query;
  service.findOne(id)
    .then(({productIndex, product}) => {
      res.json(product);
    })
    .catch(error => {
      next(error);
    })
}

const create = (req, res, next) => {
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
}

const update = (req, res, next) => {
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
}

const destroy = (req, res, next) => {
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
}

module.exports = { index, show, create, update, destroy  }
