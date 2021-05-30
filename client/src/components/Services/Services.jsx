import React from 'react'
import BgImg from '../BgImg/BgImg'
import sideImage from '../../assests/images/blood-donation-animate.svg'
// import array_data from './content'
import './Services.css'
import images from '../../assests/images/employee.svg'

const arraydata = [
    {
        key:0,
        imgsrc:"../../assests/images/Technology.jpg",
        name: "Technologies",
        services : "I used React.js to make the front end , node.js as the backend technology and mongodb as the database"
    },
    {
        key:1,
        imgsrc:"../../assests/images/user.svg",
        name: "User Login",
        services: "The User can donate and request for blood bags. They can view their history of donation or purchases."
    },
    {
        key:2,
        imgsrc:"../../assests/images/employee.svg",
        name:"Employee Login",
        services: "The Employee can update the blood Stock, Update User health and handle blood requests."
    },
    {
        key:3,
        imgsrc:"../../assests/images/Functionality.jpg",
        name: "General Functionalities",
        services : "The user can search the blood bag based on blood group."
    }
]


const Services = ()=>{
    function myfunc(elem) {
        return(
        <div className="col-md-6">
            <div className="card">
                <img className="card-img-top" src={images} alt="Card img cap" height="300" width="300"/>
                <div className="card-body">
                    <h5 className="card-title">{elem.name}</h5>
                    <p className="card-text">{elem.services}</p>
                </div>
            </div>
        </div>
        )
    }

    return (
        <>
            <BgImg line1="Sevices" line2="We provide" image={sideImage}/>
            <section className="services-section">
                <div className="container">
                    <div className="spacing">
                        <div className="row">
                            {arraydata.map(myfunc)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services