import React from 'react'
import Header from '../compo/utils/header'
import Plane from '../compo/utils/plane'
import bannerImg from '../assets/banner5.jpg'
function PlacePackage() {
  return (
    <div className='row col-12 d-flex flex-column'>
        <Header title1="Packages" title2="France Tour Package" type="subPage" className="my-5"/>
        <Plane/>
        <div className="col-12 row d-flex justify-content-center p-4">
            <div className="col-5 d-flex justify-content-center align-items-center">
                <img src={bannerImg} alt="Banner Image" className="img-fluid br-20" />
            </div>
            <div className="col-5 d-flex flex-column justify-content-center">
                <h2 className="lead fs-5 fw-normal text-info">8 Day 7 Night</h2>
                <h2 className="display-6 fw-bold col-10 my-3 ">Explore the Beauty of France and enjoy</h2>
                <h2 className="lead fs-6 fw-normal text-info">4.8</h2>
                <p className="col-12 lead fs-5 my-3">Travor is one of the most popular Travel agency for those explore the wold and try to make adventure as well as we canbeautiful destination around the world and make you trip youexplore the beautiful Maldives with great facilities</p>
                <p className="lead fs-5">Travor is one of the most popular Travel agency for those  explore the wold and try to make adventure as we provide beautiful destination around the world and make you trip</p>
            </div>
        </div>
    </div>
  )
}

export default PlacePackage