const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = require('../schema/userschema')

const router = express.Router()

//Getting the routes
router.get('/',(req,res)=>{
    res.send('Hello I am Home')
    console.log('Hellow Home page')
})

router.get('/services',(req,res)=>{
    res.send('Hello this is the Services Page')
})

router.get('/Login',(req,res)=>{
    res.send('Hello this is the Login Page')
})

router.get('/userregistration',(req,res)=>{
    res.send('Hello this is the user registration Page')
})

router.get('/empregistration',(req,res)=>{
    res.send('Hello this is the employee registration Page')
})

//POST REQUESTS
router.post('/userregistration', async (req,res)=>{
    try{
        // console.log(req.body)
        const {name , dob , gender , email , password , conpassword , mobileno , bloodgroup , lastdondate , country , state , city , aadhar} = req.body
        
        if (!name || !dob || !gender || !email || !password || !conpassword || !mobileno || !bloodgroup || !lastdondate || !country || !state || !city || !aadhar){
            console.log("Please Fill all the fields")
            res.status(422).json({err : "Please Fill all the fields"})
        }
        //Model Prepared
        const Users = mongoose.model('users', userSchema);
        //Finding the User in the Collection through the defined model
        const userData = await Users.findOne({email:email})
        
        if (userData){
            console.log("Email Already Exists")
            res.status(400).json({err: "Email Already Exists"})
        }
        else{
            const User = new Users({name , dob , gender , email , password , conpassword , mobileno , bloodgroup , lastdondate , country , state , city , aadhar})
            const isMatch = await bcrypt.compare(conpassword, password)
            if(!isMatch){
                console.log("invalid Details")
                res.status(400).json({err:"Invalid Details"})
                console.log(conpassword , password , isMatch)
            }else{
                User.save()
                res.status(200).json({message: "Data Saved Successfully in the Database"})
            }
        }
    }catch (err){
        console.log(err)
    }
})

module.exports = router