import React from 'react'
import { FaRegStar as Star } from "react-icons/fa";

function PackageCard(props) {
    return (
        <div className={`py-3 br-20 white-bg d-flex flex-column justify-content-between align-items-center ${props.className}`} key={props.keys}>
            <img src={props.obj.img} alt={props.obj.title} className=" w-100 br-20" />
            <h4 className='fw-bold mt-2 text-center col-12'>{props.obj.title}</h4>
            <p className="lead m-0 fs-6">{props.obj.dayAndNight[0]} Days {props.obj.dayAndNight[1]} Night</p>
            <div className="d-flex justify-content-between w-100 px-2 px-md-0 px-lg-2 pt-2 mt-3 border-top border-3">
                <h6 className='d-flex justify-content-center align-items-center gap-1'><Star /> {props.obj.ratings}</h6>
                <h6 className='d-flex gap-2 align-items-center'>Starts from <span className="text-orange fs-5">${props.obj.price}</span></h6>
            </div>
        </div>
    )
}

export default PackageCard