import React ,{ useState } from 'react'
import {NavLink} from 'react-router-dom'

const Footer = ()=>{
    const [colorChange , setcolorChange] = useState({
        color:"white"
    })

    return (
        <>
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
            <section id="changeColor">
                <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button type="button" className="btn btn-outline-light btn-rounded">
                    <NavLink to='/register' exact className="text-decoration-none" 
                        style={colorChange}
                        onMouseEnter = {()=>setcolorChange({color:"black"})} 
                        onMouseLeave = {()=>setcolorChange({color:"white"})} >
                        <span> Sign up!</span>
                    </NavLink> 
                </button>
                </p>
            </section>
                <section className="mb-4">
                <a className="btn btn-outline-light btn-floating m-1" rel="noreferrer" target="_blank" href="mailto:adarsh3937@gmail.com " role="button"><i className="fa fa-google"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" rel="noreferrer" target="_blank" href="https://www.instagram.com/itz__arshh/" role="button"><i className="fa fa-instagram"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/adarshagarwal198/" role="button"><i className="fa fa-linkedin"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" rel="noreferrer" target="_blank" href="https://github.com/AdarshAgrwal" role="button"><i className="fa fa-github"></i></a>
                </section>
            </div>
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2020 Copyright:
                <a className="text-white text-decoration-none " href="#"> Adarsh Agarwal</a>
            </div>
            
        </footer>
        </>
    )
}

export default Footer 
