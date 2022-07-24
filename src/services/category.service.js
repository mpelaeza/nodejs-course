const boom = require('@hapi/boom')
class CategoriesService {

  constructor(){
    this.categories = [
        {id: 1, name: "Categoría 1", price: "10"},
        {id: 2, name: "Categoría 2", price: "20"}
      ];
  }

  find() {
    return new Promise((resolve, reject) => {
      resolve(this.categories)
    })
  }

  findOne(id){
    return new Promise((resolve, reject) => {
      let productIndex = this.products.findIndex((x) => x.id == id);
      let product = this.products[productIndex];
      if(product)
        resolve({productIndex, product} );
      else
        reject(boom.notFound("product not found"));
    })
  }

  create(productData) {
    return new Promise((resolve, reject) => {
      this.findOne(this.products.length )
        .then(({productIndex, product}) => {
          productData.id = product.id + 1;
          this.products.push(productData);
          resolve(productData);
        })
        .catch(error => {
          reject(error);
        })

    })
  }

  update(id, productData){
    return new Promise((resolve, reject) => {
      this.findOne(id)
        .then(({productIndex, product}) => {
          product = {
            ...product,
            ...productData
          };
          this.products[productIndex] = product;
          resolve(product);
        })
        .catch(error => {
          reject(error)
        })

    })
  }

  delete(id){
    return new Promise((resolve, reject) => {
      this.findOne(id)
        .then(({productIndex, product}) => {
          this.products.splice(productIndex, 1);
          resolve(product)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

module.exports = CategoriesService;
