import {useState}  from 'react'
import { useHistory } from "react-router-dom";
import BgImg from '../BgImg/BgImg'
import sideImage from '../../assests/images/work.svg'
import './Register.css'
import csc from 'country-state-city'

const RegisterEmployee = ()=>{
    //Hooks In react
    const history = useHistory();
    const [empData , setEmpData] = useState({
        name : "",dob : "",gender : "",email: "",password : "",conpassword : "",mobileno : "",aadhar : "",country : "",state : "",city: ""
    })
    
    //Functions in React
    let name , value ;
    const handleInput = (e)=>{
        name = e.target.name 
        value = e.target.value
        setEmpData({ ...empData, [name]:value})
    }

    const sendEmpData = async (e)=>{
        e.preventDefault()
        const {name ,dob ,gender ,email,password ,conpassword ,mobileno ,aadhar ,country ,state ,city} = empData //Object Destructuring
        
        const res = await fetch('/empregistration',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({name ,dob ,gender ,email,password ,conpassword ,mobileno ,aadhar ,country ,state ,city})
        })
        //after this data has been sent by fetch we are going to get a response from the server right so that is res
        const data = await res.json()

        if(data.status === 422 || !data){
            window.alert("INvalid Registration")
            console.log('INvalid Registration')
        }else{
            window.alert("Registration Complete")
            console.log('Registration Complete')
            
            history.push("/employeelogin");
        }
    }

    return (
        <>
            <BgImg line1="Register as" line2="Employee" image={sideImage}/>
            <section className= "register-section">
                <div className="container">
                    <form method="POST">
                    <h3><center>Register</center></h3>
                        <div className="row">
                            <div className ="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="name"> Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Jane Doe" 
                                    value={empData.name} onChange={handleInput} required/>
                                </div>
                            </div>
                            <div className ="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="dob">Date of Birth</label>
                                    <input type="date" className="form-control" id="dob" name="dob" value={empData.dob} onChange={handleInput} required/>
                                </div>
                            </div>
                            <div className ="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="gender">Gender</label>
                                    <br/>
                                    <select name="gender" className="form-control" id="gender" value={empData.gender} onChange={handleInput} required>
                                    <option value="">Choose your gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                    </select>
                                </div> 
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required 
                                    value={empData.email} onChange={handleInput} placeholder="Email"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password"
                                    onChange={handleInput} value={empData.password} required placeholder="Password"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="conpassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="conpassword" name="conpassword"
                                    onChange={handleInput} value={empData.conpassword} required placeholder="Re-type Password"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="mobileno">Mobile No</label>
                                    <input type="text" className="form-control" id="mobileno" name="mobileno"
                                    onChange={handleInput} value={empData.mobileno} required placeholder="1234567891"/>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="form-group">
                                    <label htmlFor = "aadharCard" className="form-control-label">Aadhar Card</label>
                                    <input type="text" className="form-control" placeholder ="Upload the Document"
                                    onChange={handleInput} value={empData.aadhar} name="aadhar"></input>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <select name = "country" id="country" className="form-control"
                                    onChange={handleInput} value={empData.country} required>
                                        <option value="">Choose a Country</option>
                                        <option value='India'>India</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="State">State</label>
                                    <select name="state" id='state' className="form-control" onChange={handleInput} value={empData.state} required>
                                    <option value = "">Choose a State</option>
                                    {
                                        csc.getStatesOfCountry('IN').map((elem=>{
                                            return (
                                                <option  value ={elem.name}>{elem.name},{elem.isoCode}</option>
                                            )
                                        }))
                                    }
                                        
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="City">City</label>
                                    <select name="city" id='city' className="form-control" onChange={handleInput} value={empData.city} required>
                                    <option value = "">Choose a City</option>
                                    {
                                        csc.getCitiesOfCountry('IN').map((elem=>{
                                            return (
                                                <option  value ={elem.name}>{elem.name},{elem.isoCode}</option>
                                            )
                                        }))
                                    }

                                    </select>
                                </div>
                            </div>
                        </div>

                        
                        <button type="submit" className="btn btn-success" onClick ={sendEmpData}>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default RegisterEmployee
