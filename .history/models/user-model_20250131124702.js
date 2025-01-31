require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDB Connected')
}).cat
const UserSchema = mongoose.Schema({

})