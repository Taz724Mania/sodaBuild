// Dependencies
require("dotenv").config({})
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const SodaRouter = require("./controllers/soda")



// application object
const app = express()


// middleware
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))


// Routes and Routers

app.get("/", ( req, res) => {
    res.send("server works")
})

app.use("/soda", SodaRouter)







// Server listener
const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})

