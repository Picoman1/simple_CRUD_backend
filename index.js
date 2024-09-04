const express = require("express")
const mongoose = require("mongoose")
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')


const app = express()
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//routes
app.use('/api/products', productRoute);


app.get("/", (req, res) => {
    res.send("hello node")
})








mongoose.connect("Your Connection String")
    .then((req, res) => {
        console.log("database connected")
        app.listen(3000, () => {
            console.log("serever started in 3000")
        })
    })
    .catch(() => {
        console.log("Not connected to database")
    })


