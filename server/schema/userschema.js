const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function(next){
    const user = this
    console.log(user)
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        return next()
    } else {
        encrypted_password = await bcrypt.hash(user.password, 12)
        user.password = encrypted_password
        next()
    }
})

module.exports = userSchema