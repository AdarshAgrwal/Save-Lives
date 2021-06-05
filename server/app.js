require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
require('./database/database')

//Creating an App
const app = express()

//Getting ENV variable
const port = process.env.PORT

//Adding route middle ware
app.use(cookieParser())
app.use(express.json())
//Getting the router access
app.use(require("./routes/route"))

app.listen(port, (success, err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Server is running on ${port}`)
    }
})

//User Dashboard - details to be displayed, tables of last donation and request blood , card for donation and request
//aadhaar card file processing backend
//employee dashboard - chart/graph of sales (chart.js), authorization of requests (table-responsive), details side main.