const assert = require("assert");

const lengthFn = require("../lengthFn");

describe("LengthFn", () => {
  it("1. should return the length of the string", () => {
    let result = lengthFn("Hello");
    assert.strictEqual(result, 5);
  });
  it("2. should return the number of digits in a number", () => {
    let result = lengthFn(314);
    assert.strictEqual(result, 3);
  });
  it("3. should return 0 or 1 for a boolean", () => {
    let result = lengthFn(true);
    assert.ok(result);
  })
})