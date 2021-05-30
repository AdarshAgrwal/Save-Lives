const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

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
    conpassword : {
        type:String,
        required: true
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
    },
    tokens : [
        {
            token : {
                type : String,
                required: true
            }
        }
    ]
})


//Here the this keyword inside the pre function refers to the document that is about to be saved
//hashing the password
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.conpassword = await bcrypt.hash(this.conpassword,12)
    }
    next()
})

userSchema.methods.generateAuthToken = async function(){
    //jwt.sign(payload , secretOrPrivateKey , [options or callbacks])
    try{
        const token = jwt.sign({_id : this._id},process.env.SECRET_ACCESS_TOKEN)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    }catch(err){
        console.log(err)
    }
}

const User = mongoose.model ('users',userSchema)
module.exports = User