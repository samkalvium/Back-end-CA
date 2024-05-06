const express = require('express')
const router = require('./route.js')
require('dotenv')

const port= process.env.PORT || 3001

const app = express()
app.use(express.json())

app.use('/',router)

app.listen(port, () =>{
    console.log("App listening to port 3001")
})