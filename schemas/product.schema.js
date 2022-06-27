const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)
const price = Joi.number().integer().min(10)

const getProductSchema = Joi.object({
  id: id.required()
});

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
})

const updateProductSchema = Joi.object({
  name, price
})

module.exports = {createProductSchema, updateProductSchema, getProductSchema}
