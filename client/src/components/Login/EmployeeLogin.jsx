import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import BgImg from '../BgImg/BgImg'
import sideImage from '../../assests/images/employee.svg'
import './Login.css'


const Login = ()=>{
    const history = useHistory()
    const [email , setEmpEmail] = useState("")
    const [password , setEmpPass] = useState("")

    const postData = async () => {
        const res = await fetch ('/emplogin' , {
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify({email , password})
        })

        const data = res.json()
        console.log(data)

        if (res.status === 400){
            console.log("Login Unsuccessfull")
            window.alert("Login Unsuccessfull")
        }else{
            alert("Login Successfull")
            console.log("Login Successfull")
            history.push('/empdashboard')
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
                            <input value={email} onChange={(e)=>{setEmpEmail(e.target.value)}} className="form-control" name="email" id ="email" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input value={password} onChange={(e)=>{setEmpPass(e.target.value)}} className="form-control" name="password" id ="password" type="password"/>
                        </div>
                        <div className="form-group d-flex justify-content-between ">
                            <button className="btn btn-success" formAction="" type="submit" onClick={postData}>Employee Login</button>
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
