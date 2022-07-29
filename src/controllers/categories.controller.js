const CategoriesService = require('../services/category.service')
const service = new CategoriesService();

const index = (req, res, next) => {
  service.find()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch( error => {
      next(error);
    } )
}

const show = (req, res, next ) => {
  const { id  } = req.params;
  service.findOne(id)
    .then((category) => {
      res.status(200).json(category)
    })
    .catch( error => {
      next(error);
    } )
}

const create = (req, res, next) => {
  const body = req.body;
  service.create(body)
    .then((category) => {
      res.status(201).json({
        message: 'created',
        data: category
      })
    })
    .catch( error => {
      next(error);
    } )
}

const update = (req, res, next) => {
  const { id  } = req.params
  const body = req.body;
  service.update(id, body)
    .then((category) => {
      res.status(200).json({
        message: 'created',
        data: category
      })
    })
    .catch( error => {
      next(error);
    } )
}

const destroy = (req, res, next) => {
  const { id  } = req.params
  service.delete(id)
    .then((category) => {
      res.status(200).json({
        message: 'destroyed',
        data: category
      })
    })
}

module.exports = { index, show, create, update, destroy }
