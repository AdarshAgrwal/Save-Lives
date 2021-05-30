import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
// import $ from 'jquery';
import logo from '../../assests/images/blood.png'

const Navbar = () => {

  return (
  <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container-fluid" style={{background:'#212529'}}>
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        <img src={logo} alt="logo" width="40"/>
      </NavLink>
      <span className="navbar-text">Save Lives</span>
    
      <button 
        className="navbar-toggler text-white"
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa fa-bars"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/services" exact>
                Services
              </NavLink> 
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Register
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" exact to="/RegisterUser">User Registration</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" exact to="/RegisterEmployee">Employee Registration</NavLink>
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login" exact>
                Login
              </NavLink>
            </li>
            
        </ul>
      </div>

      </div>
  </nav>
  )
}
export default Navbar;