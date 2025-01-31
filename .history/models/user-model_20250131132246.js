require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDB Connected')
}).catch((err)=>{
    console.log(err)
})
const UserSchema = mongoose.Schema({
       fullname:String,
       email:String,
       password:String,
       cart:{
        type:Array,
        default:[]
       },
       isadmin:Boolean,
       orders:{
        
       }
})