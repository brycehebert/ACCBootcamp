function doubleInt(num) {
  if (typeof num !== "number") {
    throw new Error("not a number");
  }

  return num * 2;
}

module.exports = doubleInt;