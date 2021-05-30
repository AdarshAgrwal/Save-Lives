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
    bloodgroup : {
        type:String,
        required:true
    },
    lastdondate : {
        type:Date,
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
    },
    aadhar : {
        type:String,
        required:true
    }
})

module.exports = employeeSchema