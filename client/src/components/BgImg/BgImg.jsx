import react from 'react'
import './BgImg.css'

const BgImg = (props)=>{
    return (
        <>
            <div className="container-fluid backgroundImg">
                    <div className="row">
                        <div className="col-md-6 contain">
                            <div className="img1">
                                <img src={props.image} alt="Services-img" /> 
                            </div>
                        </div>
                        <div className="col-md-6 contain">
                            <div className="text1">
                                <h1> {props.line1} </h1>
                                <h1> {props.line2} </h1>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default BgImg