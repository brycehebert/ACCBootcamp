// NOTE: HOW TO CONVERT TO MONGO/MONGOOSE
// 1) Build our connection
//    a) install Mongoose
//    b) connect

const mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));


// 2) Build blueprints
//    a) Schema
//    b) Model

const ToDoSchema = mongoose.Schema({
    description: {
        type: String,
        required: [true, "No Description supplied."]
    },
    isComplete: {
        type: Boolean,
        default: false
    }
});

//Build/Export the model
exports.ToDoModel = mongoose.model("todo", ToDoSchema);