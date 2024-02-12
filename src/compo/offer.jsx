import React from 'react'
import travelImg1 from '../assets/Travel/travelImg1.png'
import travelImg2 from '../assets/Travel/travelImg2.png'
import decorImg4 from '../assets/decoratives/decorImg4.png'
import decorImg5 from '../assets/decoratives/decorImg5.png'
function Offer() {
    return (
        <div className="container-fluid m-0 row mb-5 justify-content-center align-items-start position-relative">
            <img src={travelImg1} alt="Book Now" className='travel-img d-none d-md-block col-4 col-md-4' data-aos="fade-right" />
            <div className="col-12 col-lg-5 col-md-5 row d-flex justify-content-center align-items-center ">
                <h3 className="lead text-center text-info fw-normal" data-aos="fade-right">Avail your Discount offer now!</h3>
                <h2 className='text-center' data-aos="fade-left">Grab <span className="text-orange ">up to 35% off</span> on<br />your favorite Destination</h2>
                <p className="lead text-center my-4" data-aos="fade-right">Limited time offer, don’t miss the opportunity</p>
                <span className="btn px-4 br-20 w-fit bg-info" data-aos="fade-left">Book Now</span>
            </div>
            <img src={travelImg2} alt="Explore the world" className='travel-img my-5 my-lg-0 col-12 col-sm-10  col-md-3' data-aos="fade-left" />
            <img src={decorImg4} alt="Explore the world" className='decor-img col-4 decor-img2 position-absolute d-none d-md-block' />
            <img src={decorImg5} alt="Explore the world" className='decor-img col-2 decor-img1 position-absolute d-none d-md-block' />
        </div>
    )
}

export default Offer