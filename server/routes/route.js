const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../schema/userschema')
const Employee = require('../schema/employeeschema')
const Contact = require('../schema/contactUs')

const router = express.Router()

//Getting the routes
router.get('/',(req,res)=>{
    res.send('Hello I am Home')
    console.log('Hello Home page')
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

router.get('/userlogin',(req,res)=>{
    res.send('This is the User Login')
})

router.get('/emplogin',(req,res)=>{
    res.send('This is the Employee Login')
})

//POST REQUESTS

//HANDLING CONTACT US REQUEST
router.post('/',async(req,res)=>{
    const {name , email ,message} = req.body

    try{
        const UserExists = await Contact.findOne({email:email})

        if(UserExists){
            UserExists.message = message ;
            const updated = await UserExists.save()

            if(updated){
                console.log("Document Successfully Updated")
                res.status(200).json({message:"Document Successfully Updated"})
            }else{
                console.log("Document was not Updated")
                res.status(422).json({message:"Document was not Updated"})
            }

        }else{
            const contact = new Contact({name , email ,message})

            const saved = await contact.save()

            if (saved){
                console.log("Data Saved Successfully")
                res.status(200).json({message : "Data Saved Sucessfully"})
            }else{
                console.log("Data Could Not be Saved")
                res.status(422).json({err : "Data could not be Saved"})
            }
        }
    }
    catch(err){
        console.log("Some Error Occured")
        res.status(400).json({err:err})
    }
})


//Handling User Registration
router.post('/userregistration', async (req,res)=>{
    // console.log(req.body)
    const {name , dob , gender , email , password , conpassword , mobileno , bloodgroup , lastdondate , country , state , city , aadhar} = req.body
        
    if (!name || !dob || !gender || !email || !password || !conpassword || !mobileno || !bloodgroup || !lastdondate || !country || !state || !city || !aadhar){
        console.log("Please Fill all the fields")
        res.status(422).json({err : "Please Fill all the fields"})
    }

    try{
        const userExists  = await User.findOne({email:email})
        if(userExists){
            console.log('Email Already Exists')
            res.status(422).json({err : "User Already Exists"})
        }
        if (password != conpassword) {
            console.log('Invalid Credentials')
            res.status(402).json({err : "Invalid Credentials"})
        }else{
            const user = new User({name , dob , gender , email , password , conpassword , mobileno , bloodgroup , lastdondate , country , state , city , aadhar})
            //Yahan Par we are getting the data first and then we are calling the save method uske beech main 
            //we need some method to hash the password so we will use userSchema.pre('save',function(){})
            const userRegistered =  await user.save()

            if(userRegistered){
                res.status(201).json({message : 'Data Sent Successfully to Database'})
            }
        }
    }catch (err){
        console.log(err)
    }
})


//Handling Employee Registration
router.post('/empregistration',async (req,res)=>{
    const {name,dob ,gender,email,password,conpassword,mobileno,aadhar,country,state,city} = req.body
    console.log(req.body)
    if (!name || !dob || !gender || !email || !password || !conpassword || !mobileno || !aadhar || !country || !state || !city  ){
        console.log("Please Fill all the fields")
        res.status(422).json({err : "Please Fill all the fields"})
    }
    try{
        const employeeExists = await Employee.findOne({email:email})
        if(employeeExists){
            console.log('Email Already Exists')
            res.status(422).json({err : "User Already Exists"})
        }
        if (password != conpassword) {
            console.log('Invalid Credentials')
            res.status(422).json({err : "Invalid Credentials"})
        }else{
            const employee = new Employee({name , dob , gender , email , password , conpassword , mobileno, aadhar , country , state , city })
            //Yahan Par we are getting the data first and then we are calling the save method uske beech main 
            //we need some method to hash the password so we will use userSchema.pre('save',function(){})
            const employeeRegistered =  await employee.save()

            if(employeeRegistered){
                console.log("Data Sent Successfully")
                res.status(201).json({message : 'Data Sent Successfully to Database'})
            }
        }
    }catch(err){
        console.log(err)
    }
})


//Handling User Login
router.post('/userlogin', async (req,res)=>{
    const {email,password} = req.body
    
    try{
        const userExists = await User.findOne({email:email}) 
        if(userExists){
            const isMatch = await bcrypt.compare(password,userExists.password)

            const token = await userExists.generateAuthToken()
            console.log(token)

            //Storing the token in the cookie 
            // res.cookie("name of the cookie" , value in the cookies , {expires: new Date (Date.now +25892000000)})
            
            res.cookie("jwtoken",token,{
                expires : new Date (Date.now() + 25892000000),
                httpOnly : true
            })

            if(isMatch){
                console.log("Login Successfully")
                res.status(200).json({message : "Logged in Successfully"})
            }else{
                console.log("Login Unsuccessful")
                res.status(400).json({message: "Incorrect Credentials"})
            }
        }       
    }catch(err){
        console.log(err)
        res.json({err:"Some Error Occured"})
    }
})


//Handling Employee Login 
router.post('/emplogin', async (req,res)=>{
    const {email,password}=req.body

    try{
        const empExists = await Employee.findOne({email:email})
        if(empExists){
            console.log(empExists.password , password)
            const isMatch = await bcrypt.compare(password, empExists.password)

            const emp_token = await empExists.generateAuthToken()
            console.log(emp_token)

            //STORING THE TOKEN IN THE COOKIE
            res.cookie("EMPCOOKIE", emp_token , {
                expires: new Date (Date.now() + 25892000000),
                httpOnly : true
            })

            if(isMatch){
                console.log("Login Successfully")
                res.status(200).json({message:"Logged in Successfully"})
            }else{
                console.log("Login Unsuccessful")
                res.status(400).json({message:"Incorrect Credentials"})
            }
        }
    } catch (err) {
        console.log(err)
        res.json({err:"Some Error Occured"})
    }
})

module.exports = router