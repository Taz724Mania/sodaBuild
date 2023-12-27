require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)

mongoose.connection
.on("open", () => {console.log("connected to mongo")})
.on("close", () => {console.log("discconnected from mongo")})
.on("error", (error) => {console.log(error)})

module.exports = mongoose