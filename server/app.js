require('dotenv').config()
const express = require('express')
require('./database/database')

//Creating an App
const app = express()

//Getting ENV variable
const port = process.env.PORT

//Adding route middle ware
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