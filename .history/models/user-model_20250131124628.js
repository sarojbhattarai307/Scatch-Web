require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URi)
const UserSchema = mongoose.Schema({

})