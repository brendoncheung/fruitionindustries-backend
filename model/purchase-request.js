const mongoose = require('mongoose')
const User = require('./user')

const model = new mongoose.model("Purchase-Request", new mongoose.Schema({
    quantity: {type: Number, required: true, min: 1},
    description: {type: String, required: true},
    manufacturer: {type: String},
    fruitionPn: {type: String},
    creationDate: {type: Date, default: () => Date.now()},
    requestDate: {type: Date, required: true},
    catagory: {type: String, enum: ['engineering', 'shortage', 'tooling', 'supply', 'ppap', 'misc']},
    createdBy: {type: {
        firstname: String,
        lastname: String,
    }},
    isResolved: {type: Boolean, default: false}
}))

module.exports = model