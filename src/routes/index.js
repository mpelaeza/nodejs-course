const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router')
const usersRouter = require('./users.router')
const ordersRouter = require('./orders.router')

function routerApi(app){
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1)
  routerV1.use('/products', productsRouter);
  routerV1.use('/categories', categoriesRouter);
  routerV1.use('/users', usersRouter)
  routerV1.use('/orders', ordersRouter)
}


module.exports = routerApi;
