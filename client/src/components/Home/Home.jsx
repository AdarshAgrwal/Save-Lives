import React from 'react'
import './Home.css'
import textImage from '../../assests/images/new-message-animate.svg'

const Home = ()=>{
    return (
        <>
        <div className="col-12">
            <div className = "background-img">
                <div className = "overlay">
                    <div className="text">
                        <div className= "centerDiv">
                            <h1> Donate Blood </h1>
                            <h1> Save Lives </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section id="home">
            <div className="container">
                <div  className="row">
                    <div className="col-md-4 box1">
                        <div className="m-4 ">
                            <h3 className="mb-4 d-flex justify-content-center">Donate Money</h3>
                            <p>You might not be a soldier but you can still be a saviour.</p>
                            <button type="button" className="btn btn-white px-3 py-2 mt-2">Sign Up</button>
                        </div> 
                    </div>
                    <div className="col-md-4 box2">
                        <div className="m-4">
                            <h3 className="mb-4 d-flex justify-content-center">Donate Blood</h3>
                            <p>You might not be a soldier but you can still be a saviour.</p>
                            <button type="button" className="btn btn-white px-3 py-2 mt-2">Sign Up</button>
                        </div>
                    </div>
                    <div className="col-md-4 box3">
                        <div className="m-4">
                            <h3 className="mb-4 d-flex justify-content-center">Be a Volunteer</h3>
                            <p>You might not be a soldier but you can still be a saviour.</p>
                            <button type="button" className="btn btn-white px-3 py-2 mt-2">Sign Up</button>
                        </div>
                    </div>
                </div>

                <div className="row secondrow">
                    <div className ="col-md-4 d-flex justify-content-center">
                        <i className="fa fa-usd"></i>
                        <p>
                        <h4>Donate Money</h4>
                        Never get tired of doing little things for others, sometimes those little things occupy the biggest parts of their hearts.
                        </p>
                    </div>

                    <div className ="col-md-4 d-flex justify-content-center">
                        <i className="fa fa-medkit "></i>
                        <p>
                        <h4>Donate Blood</h4>
                        We make a living by what we get, but we make a life by what we give.
                        </p>
                    </div>

                    <div className ="col-md-4 d-flex justify-content-center">
                        <i className="fa fa-handshake-o "></i>
                        <p>
                            <h4>Be a Volunteer</h4>
                            Volunteering teaches you to be grateful for the things you take for granted in your life.
                        </p>
                    </div>
                </div>

                <div className = "row third-row">
                    <div className="col-md-6 form-parent">
                    <h3>  <center>Send Me a Message</center></h3>
                        <div className="form-box">
                            <form >
                                <div className= "form-group">
                                    <label htmlFor="name">Name</label>
                                    <input id="name" name="name" type="text" className="form-control" required />
                                </div>  
                                <div className= "form-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" type="text" className="form-control" required />
                                </div>  
                                <div className= "form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea rows="5" cols="30" className="form-control" id="message"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success" > Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className= "col-md-6">
                        <img src={textImage} alt="side-visual" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home 
