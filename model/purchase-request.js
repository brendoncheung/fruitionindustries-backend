const mongoose = require('mongoose')
const User = require('./user')

const model = new mongoose.model("Purchase-Request", new mongoose.Schema({
    url: {type: String},
    quantity: {type: Number, required: true, min: 1},
    description: {type: String, required: true},
    manufacturer: {type: String},
    fruitionPn: {type: String},
    creationDate: {type: Date, default: () => Date.now()},
    requestDate: {type: Date, required: true},
    catagory: {type: String, enum: ['Engineering', 'Shortage', 'Tooling', 'Supply', 'PPAP', 'Misc', 'Equipment']},
    createdBy: {type: {
        firstname: String,
        lastname: String,
    }},
    isResolved: {type: Boolean, default: false}
}))

module.exports = model