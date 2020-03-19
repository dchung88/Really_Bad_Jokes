const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "all jokes require a setup"],
        minLength: [7, "setup must be at least 7 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "all jokes need a punchline"],
        minLength: [3, "punchline must be atleast 3 characters long to be funny"]
    },
}, {timestamps: true});

module.exports = mongoose.model("Joke", JokeSchema);