// assertion library
const assert = require("assert");
const double = require("../double");

//first set of tests
describe("1. Double Function", () => {
  //actually carries out the test
  it("a. should return a double integer", () => {
    //one test
    let result = double(2);
    assert.strictEqual(result, 4);
  });

  it("b. should return a negative double if negative is passed in", () => {
    //second test
    let result = double(-2);
    assert.strictEqual(result, -4);
  })

  it("c. should throw an exception if the argument is not a number", () => {
    //third test
    assert.throws(() => double({num: 2}));
  })
})