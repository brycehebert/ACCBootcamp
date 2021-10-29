const test = require("supertest");
const app = require("../server");

describe("3. PUT - mark a todo complete", () => {
  it("a. should return 200 on toggle completion and opposite completion status", (done) => {
    const data = { description: "Complete Homework" };

    test(app)
      .post(`/todos`)
      .set("Accept", "application/json")
      .send(data)
      .expect("Content-Type", /json/i)
      .expect(201)
      .expect(/homework/i)
      .end((err, res) => {
        test(app)
        .put(`/todos/${res.body.id}`)
        .expect(200)
        .expect("Content-Type", /json/i)
        .expect({id: res.body.id, description: data.description, isComplete: true}, done)
      });
  });
});
