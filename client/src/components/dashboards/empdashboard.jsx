import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const Empdashboard = () => {
    const history = useHistory()

    const callExecution = async ()=>{
        try{
            //Sending the cookie back to the front end for futher processing
            const res = await fetch('/empdashboard',{
                method : "GET",
                headers : {
                    "Content-Type":"application/json",
                    Accept : "application/json"
                },
                credentials:"include"
            })

            const data = await res.json()

            console.log(data)

            if (res.status !== 200){
                throw new Error (res.error)
            }else{
                console.log("We got the Data successfully from the cookie")
            }
        }catch(err){
            console.log(err)
            history.push('/employeelogin')
        }

    }

    useEffect(()=>{
        callExecution()
    })

    return (
        <>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
            </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
            
        </>
    )
}

export default Empdashboard
