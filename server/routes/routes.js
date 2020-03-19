const Jokes = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", Jokes.getAllJokes);
    app.get("/api/jokes/:_id", Jokes.getSingleJoke);
    app.put("/api/jokes/:_id". Jokes.updateExistingJoke);
    app.post("/api/jokes/new", Jokes.createNewJoke);
    app.delete("/api/jokes/:_id", Jokes.deleteExistingJoke);
}