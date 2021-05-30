const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const employeeSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    dob : {
        type:Date,
        required:true
    },
    gender : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    conpassword : {
        type:String,
        required:true
    },
    mobileno : {
        type:Number,
        required:true
    },
    aadhar : {
        type:String,
        required:true
    },
    country : {
        type:String,
        required:true
    },
    state : {
        type:String,
        required:true
    },
    city : {
        type:String,
        required:true
    }
})
employeeSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.conpassword = await bcrypt.hash(this.conpassword,12)
    }
    next()
})


const Employee = mongoose.model('employees',employeeSchema)

module.exports = Employee