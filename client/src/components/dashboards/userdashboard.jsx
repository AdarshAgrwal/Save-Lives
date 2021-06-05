import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './dashboard.css';
const Userdashboard = () => {
    const history = useHistory()
    const callAboutPage = async ()=>{
        try{
            const res = await fetch('/userdashboard',{
                method : "GET",
                headers : {
                    "Content-Type":"application/json",
                    Accept : "application/json"
                },
                credentials:"include"
            })

            //itna upar ka cheez likh kar the cookie will be passed from the front end to the backend and we will check if database main
            //woh cookie token exist karti hai ki nahi and agar karta hai woh woh pura ka pura user ka data jiske liye woh cookie exists
            //karta hai woh front end main ajayega and we can make use of that cookie data to show stuff 
            
            const data = await res.json()
            console.log(data)

            //idhar data main sara data mil chuka hoga !!

            if (res.status !== 200){
                throw new Error(res.error)
                 // throw new Error (res.error)
            } 
            else{
                console.log("We got the Data successfully from the cookie")
            }

        }catch(err){
            console.log(err)
            history.push('/login')
        }
        
    }
    //we cannot use async function in our useEffect
    useEffect(()=>{
        callAboutPage()
    })

    return (
        <>
            <div id="dashboard">
             <div className="row">
                <div className="col-12 col-sm-4 info">
                    <h1>Personal Info</h1>

                </div>
                    <div className="col-12 col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                
                            </div>
                        </div>

                </div>
             </div>
            </div>     
        </>
    )
}

export default Userdashboard
