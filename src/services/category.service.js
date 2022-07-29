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
      let categoryIndex = this.categories.findIndex((x) => x.id == id);
      let category = this.categories[categoryIndex];
      if(category)
        resolve({categoryIndex, category} );
      else
        reject(boom.notFound("category not found"));
    })
  }

  create(productData) {
    return new Promise((resolve, reject) => {
      this.findOne(this.categories.length )
        .then(({categoryIndex, category}) => {
          productData.id = category.id + 1;
          this.categories.push(productData);
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
        .then(({categoryIndex, category}) => {
          category = {
            ...category,
            ...productData
          };
          this.categories[categoryIndex] = category;
          resolve(category);
        })
        .catch(error => {
          reject(error)
        })

    })
  }

  delete(id){
    return new Promise((resolve, reject) => {
      this.findOne(id)
        .then(({categoryIndex, category}) => {
          this.categories.splice(categoryIndex, 1);
          resolve(category)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

module.exports = CategoriesService;
