const express = require('express')
const app = express()
const path = require('path')

const cookieParser = require('cookie-parser')
const userModel = require('./models/user-model')
const db = require('./config/mongoose-connector')
const userRouter = require('./routes')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, )))
app.use(cookieParser())



app.use('/owners',ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(20000)