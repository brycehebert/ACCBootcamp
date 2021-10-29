const test = require("supertest");
const app = require("../server");

describe("1. GET todos", () => {
  it("a. should return 200 status code", (done) => {
    test(app).get("/todos").expect("Content-Type", /json/i).expect(200, done);
  });
});
