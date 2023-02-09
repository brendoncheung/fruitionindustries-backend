const mongoose = require('mongoose')

const model = new mongoose.model("User", new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String}
}))

module.exports = model;