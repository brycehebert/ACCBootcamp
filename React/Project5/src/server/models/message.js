const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, default: ""},
  message: {type: String, default: "No message submitted"}
});

module.exports = mongoose.model("Message", MessageSchema);