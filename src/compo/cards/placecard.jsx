import React from 'react'
import { GrLocation as Location } from "react-icons/gr";
import { FaRegStar as Star } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Placecard(props) {
  const updateCookies=()=>{
    document.cookie=JSON.stringify(props.obj)
  }
  return (
    <Link className={`text-dark text-decoration-none card-hover ${props.className}`} to="/destination/catlog" onClick={updateCookies} key={props.keys} data-aos={props.animation} data-aos-duration="800">
      <div className="container-fluid d-flex justify-content-center">
        <img src={props.obj.img} alt={props.obj.title} width={350} className='w-100 rounded-4 align-self-center' />
      </div>
      <div className='px-3'>
        <div className="d-flex justify-content-between mt-3" >
          <h3 className='m-0 offer-title'>{props.obj.title}</h3>
          <div className="lead d-flex align-items-center gap-1 m-0 justify-content-center ">
            <Star className="fs-6" />
            <span className='fs-6 fw-normal'>{props.obj.ratings}</span>
          </div>
        </div>
        <div className="lead d-flex justify-content-start gap-1 align-items-center">
          <Location className='fs-6' />
          <span className="fs-6">{props.obj.location}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center my-3">
          <p><span className="fs-4 fw-bold">${props.obj.price}</span>/Head</p>
          <span className="btn btn-outline btn-warning h-fit px-4 py-1">Book</span>
        </div>
      </div>
    </Link>
  )
}

export default Placecard