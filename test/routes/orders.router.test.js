const request = require("supertest");
const app = require('../../app');
const BASE_PATH = '/api/v1/orders'


//Router Responsability
// 1. Listen http request
// 2. Response with valid params

describe("Test orders routes", () => {
  test("It should response 200 the GET method", () => {
    return request(app)
      .get(BASE_PATH)
      .expect(200)
  });

});
