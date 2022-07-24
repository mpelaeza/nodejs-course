const CategoriesService = require('../services/category.service')
const service = new CategoriesService();

const index = (req, res, next) => {
  service.find()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch( error => {
      next(error)
    } )
}

module.exports = { index }
