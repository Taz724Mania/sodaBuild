// dependencies
const express = require("express")
const Soda = require("../models/soda")

// CREATE ROUTER
const router = express.Router()
// routes

//SEED ROUTE - inputs arbitrary data into the database
router.get("/seed", async (req, res) => {
    await Soda.deleteMany({})
    const sodas = await Soda.create([
        {name: "orange", color:"orange", readyToSell: true},
        {name: "grape", color:"purple", readyToSell: true},
        {name: "cola", color:"brown", readyToSell: true},
    ])
    res.json(sodas)
})


// export the routes
module.exports = router