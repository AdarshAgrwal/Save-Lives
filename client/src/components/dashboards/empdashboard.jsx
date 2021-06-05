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
            <h1> Hello I am the emp dashboard</h1>
        </>
    )
}

export default Empdashboard
