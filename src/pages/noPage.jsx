import React from 'react'
import errorImg from '../assets/error.png'
function NoPage() {
  return (
    <div className="row col-12 d-flex">
        <div className="col-12 d-flex justify-content-center p-3">
          <img src={errorImg} alt="404 Error Image" className='img-fluid'/>
        </div>
        <p className="lead fs-4 fw-normal text-center col-12">OOPS!! Something went wrong...</p>
    </div>
  )
}

export default NoPage