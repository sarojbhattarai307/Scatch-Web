require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDB Connected')
}).catch((err))
const UserSchema = mongoose.Schema({

})