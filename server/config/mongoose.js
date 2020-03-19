const mongoose = require("mongoose");

module.exports = db_name => {
    mongoose.connect(`mongodb://localhost/${db_name}`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then( () => console.log(`Successfully connected to jokes`))
        .catch(err => console.log("Something went wrong", err));
}