const mongoose = require('mongoose')

//Getting the Mongo DB Key
const mongo_key = process.env.MONGO_KEY

mongoose.connect(mongo_key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>{
      console.log("Connection with Database Successfull")
  }).catch((err)=>{
      console.log(err + 'Connection Unsuccessfull')
  })