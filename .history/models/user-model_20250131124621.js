require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.Mongo)
const UserSchema = mongoose.Schema({

})