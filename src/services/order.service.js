
class OrderService {
  constructor(){
    this.orders = [
      { id: 1, items: [1, 2, 3]},
      { id: 2, items: [4, 5, 6,]}
    ]
  }

  find(){
    return new Promise((resolve, reject) => {
      resolve(this.orders)
    })
  }
}

module.exports = OrderService;
