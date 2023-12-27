// Connect mongoose with connection.js b/c its already setup with our other files
const mongoose = require("./connection")

// SODA SCHEMA - definition or shape of the data type
const sodaSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: String,
    readyToSell: Boolean
}, {timestamps: true})

// SODA MODEL - interface with the database for sodas
const Soda = mongoose.model("Soda", sodaSchema)

// Export the Soda Model
module.exports = Soda