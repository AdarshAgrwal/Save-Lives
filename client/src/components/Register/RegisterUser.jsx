import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import BgImg from '../BgImg/BgImg'
import sideImage from '../../assests/images/employee.svg'
import './Register.css'
import csc from 'country-state-city'

const Register = ()=>{
    const history = useHistory()
    const [userData , setUserData] = useState({
        name : "",dob : "",gender : "",email: "",password : "",conpassword : "",mobileno : "",bloodgroup: "",lastdondate: "",country : "",state : "",city: "",aadhar : ""
    })

    let name,value;

    const handleInputs = (e)=>{
        name = e.target.name
        value = e.target.value 
        console.log(value)
        setUserData( {...userData , [name] : value} )
    }

    const postData = async (e)=>{
        e.preventDefault()
        const { name ,dob ,gender ,email,password ,conpassword ,mobileno ,bloodgroup,lastdondate,country ,state ,city,aadhar} = userData

        const response = await fetch ('/userregistration',{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ name ,dob ,gender ,email,password ,conpassword ,mobileno ,bloodgroup,lastdondate,country ,state ,city,aadhar})
        })

        const data = await response.json()

        if(data.status === 422 || !data){
            window.alert("INvalid Registration")
            console.log('INvalid Registration')
        }else{
            window.alert("Registration Complete")
            console.log('Registration Complete')
            
            history.push("/login");
        }
    }   
 
    return (
        <>
            <BgImg line1="Register" line2="Now" image={sideImage}/>
            <section className= "register-section">
                <div className="container">
                    <form>
                    <h3><center>Register</center></h3>
                        <div className="row">         
                            <div className ="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="name"> Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Jane Doe"
                                     value={userData.name} onChange={handleInputs} required/>
                                </div>
                            </div>
                            <div className ="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="dob">Date of Birth</label>
                                    <input type="date" className="form-control" id="dob" name="dob" 
                                    value={userData.dob} onChange={handleInputs} required/>
                                </div>
                            </div>
                            <div className ="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="gender">Gender</label>
                                    <br/>
                                    <select name="gender" className="form-control" id="gender"
                                     value={userData.gender} onChange={handleInputs} required>
                                        <option value = "">Choose your gender</option>
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
                                    <input type="email" className="form-control" id="email" name="email" 
                                    value={userData.email} onChange={handleInputs} required placeholder="Email"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password"
                                     value={userData.password} onChange={handleInputs} required placeholder="Password"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="conpassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="conpassword" name="conpassword" 
                                    value={userData.conpassword} onChange={handleInputs} required placeholder="Re-type Password"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="mobileno">Mobile No</label>
                                    <input type="text" className="form-control" id="mobileno" name="mobileno" 
                                    value={userData.mobileno} onChange={handleInputs} required placeholder="1234567891"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="bloodgroup">Blood Group</label>
                                    <br/>
                                    <select name="bloodgroup" className="form-control" id="bloodgroup"
                                     value={userData.bloodgroup} onChange={handleInputs} required>
                                        <option value="">Choose a Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="lastdondate">Last Date of Donation</label>
                                    <input type="date" className="form-control" id="lastdondate" name="lastdondate"
                                     value={userData.lastdondate} onChange={handleInputs} required />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <select name = "country" id="country" className="form-control"
                                     value={userData.country} onChange={handleInputs} required>
                                    <option value=''>Choose a Country</option>
                                    <option value="India">India</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="State">State</label>
                                    <select name="state" id='state' className="form-control"
                                     value={userData.state} onChange={handleInputs} required>
                                    <option value = "">Choose a State</option>
                                    {csc.getStatesOfCountry("IN").map((elem)=>{
                                        return(
                                            <option value={elem.isoCode}>{elem.name} , {elem.isoCode}</option>
                                        )
                                    })}
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <select name="city" id='city' className="form-control" 
                                    value={userData.city} onChange={handleInputs} required>
                                    <option value = "">Choose a City</option>
                                    {csc.getCitiesOfCountry("IN").map((elem)=>{
                                        return(
                                            <option value={elem.isoCode}>{elem.name} , {elem.isoCode}</option>
                                        )
                                    })}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className = "row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor = "aadharCard" className="form-control-label">Aadhar Card</label>
                                    <input type="text" className="form-control" placeholder ="Upload the Document" 
                                    value={userData.aadhar}  onChange={handleInputs} required name="aadhar"></input>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success" onClick={postData}>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register 
