const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/items',{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("Connected to DB"))
.catch(error => console.error(error))

app.use(express.json())

const menu = require('./allItems/foodItems')
app.use('/foodItems',menu)



app.listen(3000)