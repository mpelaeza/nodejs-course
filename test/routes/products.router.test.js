const request = require("supertest");
const app = require('../../app');
const BASE_PATH = '/api/v1/products'

const productParams = {
	"name": "Producto3",
	"price": "40"
}

//Router Responsability
// 1. Listen http request
// 2. Response with valid params

describe("Test product routes", () => {
  test("It should response 200 the GET method", () => {
    return request(app)
      .get(BASE_PATH)
      .expect(200)
  });

  test("It should response 200 the GET :id method", () => {
    return request(app)
      .get(BASE_PATH + "/1")
      .expect(200)
  });

  test("It should response 201 the POST method", () => {
    return request(app)
      .post(BASE_PATH)
      .send(productParams)
      .expect(201)
  });


  test("It should response 201 the PATCH :id method", () => {
    return request(app)
      .patch(BASE_PATH + "/1")
      .send(productParams)
      .expect(200)
  });

  test("It should response 201 the DELETE :id method", () => {
    return request(app)
      .delete(BASE_PATH + "/1")
      .expect(200)
  });

});
