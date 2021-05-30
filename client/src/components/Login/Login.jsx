import React from 'react'
import BgImg from '../BgImg/BgImg'
import sideImage from '../../assests/images/user.svg'
import './Login.css'


const Login = ()=>{
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
                            <input className="form-control" name="email" id ="email" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" name="password" id ="password" type="password"/>
                        </div>
                        <div className="form-group d-flex justify-content-between ">
                            <button className="btn btn-success" formAction="" type="submit">User Login</button>
                            <button className="btn btn-success" formAction="" type="submit">Employee Login</button>
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
