const jwt = require('jsonwebtoken')
const User = require('../schema/userschema')
const Employee = require('../schema/employeeschema')

const authenticate = async (req,res,next) =>{
    try{
        //getting back the token which was earlier saved in our cookie

        const token = req.cookies.USERCOOKIE;
        const verifyToken = jwt.verify(token,process.env.SECRET_ACCESS_TOKEN)

        const user = await User.findOne ({_id : verifyToken._id, "tokens.token":token })
        //We get the user here, on the basis of the id and the token saved in the cookie which is being compared with the other tokens in the 
        //database of the object. 

        if(!user){throw new Error('User not Found')}
        
        //we are doing this req.token so that with the help of that we can get the token we have got from the cookie here
        req.token = token

        //we can get the value of the user which we found here from the database
        req.user = user 
        req.userID = user._id

        next()

    }catch(err){
        console.log(err)
        res.status(401).json({err:"unauthorized"})
    }
}

const empauthenticate = async(req,res,next)=>{
    try{
    //Reading the data that was stored in the cookie tht is the token
    const token = req.cookies.EMPCOOKIE

    //Getting the Data that was stored in the token
    const verifyToken = jwt.verify(token , process.env.EMP_ACCESS_TOKEN)
    console.log(verifyToken)

    //geeting the emp Data
    const emp = await Employee.findOne({_id:verifyToken._id , "tokens.token":token})
    console.log(emp)
    
        if (!emp) { throw new Error("Employee not found") }
        
        req.token = token
        req.emp = emp
        req.empId = emp._id
        next()
    
    }catch(err){
        console.log(err)
        res.status(401).json({err:"unauthorized"})
    }

}

module.exports = {authenticate,empauthenticate}