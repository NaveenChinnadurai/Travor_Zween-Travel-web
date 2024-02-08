import React from 'react'
import { GrLocation as Location } from "react-icons/gr";
import { FaRegStar as Star } from "react-icons/fa";
function Placecard(props) {
  return (
    <div className={props.className} key={props.keys} data-aos={props.animation} data-aos-duration="800">
      <div className="container-fluid d-flex justify-content-center">
        <img src={props.obj.img} alt={props.obj.title} width={350} className='w-100 rounded-4 align-self-center' />
      </div>
      <div className='px-3'>
        <div className="d-flex justify-content-between mt-3">
          <h3 className='m-0'>{props.obj.title}</h3>
          <p className="lead d-flex align-items-center gap-1 m-0 justify-content-center fs-5 fw-normal"><span className="fs-6"><Star /></span>{props.obj.ratings}</p>
        </div>
        <p className="lead d-flex justify-content-start align-items-center p-0 m-0"><span className="fs-5"><Location /></span>{props.obj.location}</p>
        <div className="d-flex justify-content-between align-items-center my-3">
          <p><span className="fs-3 fw-bold">$ {props.obj.price}</span> /Head</p>
          <span className="btn btn-outline btn-warning h-fit px-4 py-1">Book</span>
        </div>
      </div>
    </div>
  )
}

export default Placecard