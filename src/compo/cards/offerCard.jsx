import React from 'react'
import { GrLocation as Location } from "react-icons/gr";

function OfferCard(props) {
    return (
        <div className={`row d-flex col-10 col-sm-5 m-0 p-3 d-flex white-bg br-20 cur-pointer  ${props.className}`} data-aos={props.animation}>
            <div className="col-12 p-0 position-relative change-btn-on-hover">
                <img src={props.obj.img} alt={props.obj.title} className="w-100 br-20" />
                <span className="btn bg-info fw-bold text-light rounded-pill position-absolute px-2 py-1 offer-btn">35% OFF</span>
            </div>
            <div className="col-12 p-0 mt-2 d-flex flex-column gap-2">
                <p className="p-0 lead m-0 fs-6 fw-light text-info">{props.obj.packageInfo.dayAndNight[0]} Days {props.obj.packageInfo.dayAndNight[1]} Night</p>
                <h4 className='p-0 col-12 m-0 2'>{props.obj.packageInfo.title}</h4>
            </div>
            <div className="lead my-1 col-12 d-flex p-0 m-0 justify-content-start gap-1 align-items-center">
                <Location className='fs-6' />
                <span className="fs-6">{props.obj.location}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center p-0 py-2">
                <p className='m-0'><span className="fs-6 fw-bold">${props.obj.price}</span>/Head</p>
                <span className="btn bg-warning rounded-pill border-warning h-fit px-3 py-0 fs-6">Book</span>
            </div>
        </div>
    )
}

export default OfferCard