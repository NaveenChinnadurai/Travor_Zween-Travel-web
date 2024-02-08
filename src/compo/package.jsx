import React from 'react'
import { FaRegStar as Star } from "react-icons/fa";

function Package(props) {
    return (
        <div className={`${props.className}`} key={props.keys} data-aos={props.animation}>
            <img src={props.obj.img} alt={props.obj.title} className=" w-100 br-20" />
            <h4 className='fw-bold my-md-3 my-2'>{props.obj.title}</h4>
            <p className="lead">{props.obj.dayAndNight[0]} Days {props.obj.dayAndNight[1]} Night</p>
            <div className="d-flex justify-content-between w-100 px-4 py-md-3  py-1 border-top border-3">
                <h6 className='d-flex justify-content-center align-items-center gap-1'><Star /> {props.obj.ratings}</h6>
                <h6 className='d-flex gap-2 align-items-center'>Starts from <span className="text-orange fs-5">$ {props.obj.price}</span></h6>
            </div>
        </div>
    )
}

export default Package