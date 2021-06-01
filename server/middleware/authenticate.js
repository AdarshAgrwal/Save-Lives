const jwt = require('jsonwebtoken')
const User = require('../schema/userschema')

const authenticate = async (req,res,next) =>{
    try{
        //getting back the token which was earlier saved in our cookie

        const token = req.cookie.USERCOOKIE;
        const verifyToken = jwt.verify(token,process.env.SECRET_ACCESS_TOKEN)
        console.log(verifyToken)

        const user = await User.findOne ({_id : verifyToken._id, "tokens:token":token })

        if(!user){throw new Error('User not Found')}
        
        //we are doing this req.token so that with the help of that we can get the token we have got from the cookie here
        req.token = token

        //we can get the value of the user which we found here from the database
        req.user = user 
        req.userID = user._id

        console.log(token , user)

        next()

    }catch(err){
        console.log(err)
        res.status(401).json({err:"unauthorized"})
    }
}

module.exports = authenticate