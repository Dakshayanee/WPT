const express=require('express')
const app=express()

const bodyParser=require('body-parser')
const routerProduct=require('./routes/product')

app.use(bodyParser.json())
app.use(routerProduct)

app.listen(4000)
console.log('server is running on 4000')

