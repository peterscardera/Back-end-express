const supertest = require("supertest");

const app = require("../app.js");

describe("GET /api", function () {
  it("responds with json", function (done) {
    supertest(app)
      .get("/api")
      .query({ a: 2, b: 2 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  
});
