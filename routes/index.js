const express = require('express');

const productsRouter = require('./products.router');
//const usersRouter = require('./users.router')
//const categoriesRouter = require('./users.rout

function routerApi(app){
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1)
  routerV1.use('/products', productsRouter);
  //app.use('/users', usersRouter)
  //app.use('/categories', categoriesRouter)
}


module.exports = routerApi;
