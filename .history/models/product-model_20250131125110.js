require('dotenv').config()
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    image:String,
    name:String,
    price:{
        
    }
})