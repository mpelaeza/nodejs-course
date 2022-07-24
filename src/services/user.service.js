const boom = require('@hapi/boom')
class UsersService {

  constructor(){
    this.users = [
        {id: 1, name: "Mateo Pelaez", email: "mateo@example.com"},
        {id: 2, name: "Ana Carolina Ortega", email: "anacaro@example.com"}
      ];
  }

  find() {
    return new Promise((resolve, reject) => {
      resolve(this.users)
    })
  }

  findOne(id){
    return new Promise((resolve, reject) => {
      let userIndex = this.users.findIndex((x) => x.id == id);
      let user = this.users[userIndex];
      if(user)
        resolve({userIndex, user} );
      else
        reject(boom.notFound("user not found"));
    })
  }

  create(userData) {
    return new Promise((resolve, reject) => {
      this.findOne(this.users.length )
        .then(({userIndex, user}) => {
          userData.id = user.id + 1;
          this.users.push(userData);
          resolve(userData);
        })
        .catch(error => {
          reject(error);
        })

    })
  }


  update(id, userData){
    return new Promise((resolve, reject) => {
      this.findOne(id)
        .then(({userIndex, user}) => {
          user = {
            ...user,
            ...userData
          };
          this.users[userIndex] = user;
          resolve(user);
        })
        .catch(error => {
          reject(error)
        })

    })
  }

  delete(id){
    return new Promise((resolve, reject) => {
      this.findOne(id)
        .then(({userIndex, user}) => {
          this.users.splice(userIndex, 1);
          resolve(user)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

module.exports = UsersService;
