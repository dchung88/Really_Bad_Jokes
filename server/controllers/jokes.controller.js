const mongoose = require("mongoose");
const Joke = require("../models/jokes.models");


class JokeController {
    getAllJokes(req, res) {
        Joke.find({})
            .then(jokes => res.json(jokes))
            .catch(err => res.json(err));
    }

    getSingleJoke(req, res) {
        Joke.findOne({ _id: req.params.id })
            .then(singleJoke => res.json(singleJoke))
            .catch(err => res.json(err));
    }

    createNewJoke(req, res) {
        let newJoke = new Joke(req.body)
        newJoke.save()
            .then( () => res.json({ msg: "new joke has been added" }))
            .catch(err => res.json(err));
    }

    updateExistingJoke(req, res) {
        Joke.findJokeAndUpdate({ _id: req.params._id }, req.body, { runValidators:true })
            .then(() => res.json({ msg: "joke has been updated" }))
            .catch(err => res.json(err));
    }

    deleteExistingJoke(req, res) {
        Joke.deleteJoke({ _id: req.params._id })
            .then(() => res.json({ msg: "joke wasn't funny" }))
            .catch(err => res.json(err))
    }

}

module.exports = new JokeController();