const OrderService = require('../services/order.service')
const service = new OrderService();

const index = (req, res, next) => {
  service.find()
    .then( ( orders ) => {
      res.status(200).json(orders)
    })
}
module.exports = { index }
