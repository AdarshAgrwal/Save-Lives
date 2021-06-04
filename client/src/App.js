import React from 'react'
import {Switch , Route } from 'react-router-dom'
//  COMPONENTS
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import UserLogin from './components/Login/Login'
import EmployeeLogin from './components/Login/EmployeeLogin'
import RegisterUser from './components/Register/RegisterUser'
import RegisterEmployee from './components/Register/RegisterEmployee'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import Empdashboard from './components/dashboards/empdashboard'
import Userdashboard from './components/dashboards/userdashboard'

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={UserLogin}/>
        <Route path="/employeelogin" exact component={EmployeeLogin}/>
        <Route path="/Services" exact component={Services} /> 
        <Route path="/RegisterUser" exact component={RegisterUser} /> 
        <Route path="/RegisterEmployee" exact component={RegisterEmployee} /> 
        <Route path="/empdashboard" exact component={Empdashboard} /> 
        <Route path="/userdashboard" exact component={Userdashboard} /> 
      </Switch>
    <Footer/>
    </>
  );
}

export default App;
