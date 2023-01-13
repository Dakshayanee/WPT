const express=require('express')
const app=express()


const routerStudent=require('./routes/Student')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(routerStudent)

app.listen(2000)
console.log("server is running on 2000")