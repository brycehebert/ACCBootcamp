function lengthFn(value) {
  if (typeof value === "string")
    return value.length;
  
  if (typeof value === "number")
    return value.toString().length;
  
  
}

module.exports = lengthFn;