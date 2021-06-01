import React , {useState} from 'react'
import {useHistory} from 'react-router-dom'
import BgImg from '../BgImg/BgImg'
import sideImage from '../../assests/images/user.svg'
import './Login.css'


const Login = ()=>{
    const history = useHistory()
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const postData = async (e)=>{
        e.preventDefault()
        //Fetch returns a promise
        const res = await fetch('/userlogin',{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({email , password})
        }) 

        const data = await res.json()

        if (Object.keys(data)[0] === 'err' || !data){
            console.log("Login Unsuccessfull")
            window.alert("Login Unsuccessful, please check your credentials")
        }else{
            console.log("Login Successfull")
            window.alert("Successfully Logged in")

            history.push('/')
        }
    }
    
    return (
        <>
        <BgImg line1="Welcome" line2="Login" image={sideImage}/>
        <section className="login-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-box">
                    <h3><center>Donate Blood</center></h3>
                    
                    <p>Blood is the most precious gift that anyone can give to another person — the gift of life. 
                    <br/> <br/>A decision to donate your blood can save a life, or even several if your blood is separated into its components — red cells, platelets and plasma. 
                    <br/> <br/>These can be used individually for patients with specific conditions.</p>
                </div>
                <div className="col-md-6 text-box">
                    <form method="POST">
                    <h3 id="remove"> <center>Login Form</center></h3>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id ="email" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" id ="password" type="password"/>
                        </div>
                        <div className="form-group d-flex justify-content-between ">
                            <button className="btn btn-success" type="submit" onClick={postData}>User Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        </section>
        </>
    )
}

export default Login 
