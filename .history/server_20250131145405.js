const express = require('express')
const app = express()
const path = require('path')

const cookieParser = require('cookie-parser')
const userModel = require('./models/user-model')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, )))
app.use()

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.listen(20000)