const UsersService = require('../services/user.service')
const service = new UsersService();

const index = (req, res, next) => {
  service.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch( error => {
      next(error)
    } )
}

const show = (req, res, next) => {
  const { id } = req.params;
  service.findOne(id)
    .then(({userIndex, user}) => {
      res.json(user)
    })
    .catch(error => {
      next(error)
    })
}

const create = (req, res, next) => {
  const body = req.body;
  service.create(body)
    .then( user => {
      res.status(201).json({
        message: 'created',
        data: user
      });
    } )
    .catch( error => {
      next(error);
    } )
}

const update = (req, res, next) => {
  const { id } = req.params
  const { body }= req.body
  service.update(id, body)
    .then( user => {
      res.json({
        message: 'updated',
        data: user
      });
    })
    .catch(error => {
      next(error);
    })
}

const destroy = (req, res, next) => {
  const { id  } = req.params
  service.delete(id)
    .then( user => {
      res.json({
        message: 'deleted',
        data: user
      })
    } )
}

module.exports = { index, show, create, update, destroy }
