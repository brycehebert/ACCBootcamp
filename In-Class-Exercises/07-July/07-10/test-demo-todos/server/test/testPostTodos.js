const test = require("supertest");
const app = require("../server");

describe("2. POST a new todo", () => {
  it("a. should return 201 status code", (done) => {
    const data = { description: "Complete Homework", isComplete: false };

    test(app)
      .post("/todos")
      .set("Accept", "application/json")
      .send(data)
      .expect("Content-Type", /json/i)
      .expect(201)
      .expect(/homework/i, done);
  });
});
