const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./models/use')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, )))

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.listen(20000)