require('dotenv').config()
const express = require('express')

const routes = require("./routes/route")
require('./database/database')

//Creating an App
const app = express()

//Getting ENV variable
const port = process.env.PORT

//Adding route middle ware
app.use(express.json())
app.use('/', routes)

app.listen(port, (success, err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Server is running on ${port}`)
    }
})