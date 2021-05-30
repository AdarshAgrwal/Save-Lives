import BgImg from '../BgImg/BgImg'
import sideImage from '../../assests/images/work.svg'
import './Register.css'
import csc from 'country-state-city'

const RegisterEmployee = ()=>{
 
    return (
        <>
            <BgImg line1="Register as" line2="Employee" image={sideImage}/>
            <section className= "register-section">
                <div className="container">
                    <form>
                    <h3><center>Register</center></h3>
                        <div className="row">
                            <div className ="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="name"> Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Jane Doe" required/>
                                </div>
                            </div>
                            <div className ="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="dob">Date of Birth</label>
                                    <input type="date" className="form-control" id="dob" name="dob" required/>
                                </div>
                            </div>
                            <div className ="col-lg-4">
                                <div class="form-group">
                                    <label class="form-control-label" htmlFor="gender">Gender</label>
                                    <br/>
                                    <select name="gender" className="form-control" id="gender" required>
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
                                    <input type="email" className="form-control" id="email" name="email" required placeholder="Email"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" required placeholder="Password"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="conpassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="conpassword" name="conpassword" required placeholder="Re-type Password"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="mobileno">Mobile No</label>
                                    <input type="text" className="form-control" id="mobileno" name="mobileno" required placeholder="1234567891"/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label class="form-control-label" htmlFor="bloodgroup">Blood Group</label>
                                    <br/>
                                    <select name="bloodgroup" className="form-control" id="bloodgroup" required>
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
                                    <input type="date" className="form-control" id="lastdondate" name="lastdondate" required />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <select name = "country" id="country" className="form-control" rquired>
                                    <option value=''>Choose a Country</option>
                                    {csc.getAllCountries().map((elem)=>{
                                        return(
                                            <option value={elem.isoCode}>{elem.name} , {elem.isoCode}</option>
                                        )
                                    })}
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="State">State</label>
                                    <select name="state" id='state' className="form-control" required>
                                    <option value = "">Choose a State</option>
                                        
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="City">City</label>
                                    <select name="city" id='city' className="form-control" required>
                                    <option value = "">Choose a City</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className = "row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor = "aadharCard" className="form-control-label">Aadhar Card</label>
                                    <input type="file" className="form-control" placeholder ="Upload the Document" name="aadhar"></input>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success" formAction="">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default RegisterEmployee
