require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_)
const UserSchema = mongoose.Schema({

})