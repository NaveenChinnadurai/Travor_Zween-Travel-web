import React from 'react'
import icon from '../assets/icons/newsletter.png'
function Subcribe() {
    return (
        <div className='m-0 row justify-content-center bg-light p-5'>
            <div className="col-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-items-start" data-aos="fade-left">
                <h2 className="lead d-flex gap-2 fw-normal">
                    Our Newsletter
                    <img src={icon} alt="newletter" />
                </h2>
                <h1>Subscribe our <br /><span className="text-orange text-decoration-underline">Newsletter</span> now!</h1>
                <p className="lead">For latest updates & Promotions</p>
            </div>
            <div className="col-12 col-md-7 col-lg-6 d-flex flex-column gap-3 align-items-start align-items-md-center justify-content-center position-relative p-0" date-aos="fade-right">
                <input type="text" placeholder='Enter Your Email Here' className='w-100 p-3 p-lg-4 rounded-pill border-info subscribe-input'/>
                <span className="btn btn-info px-5 py-3 rounded-pill subscribe-btn">Subscribe</span>
            </div>
        </div>
    )
}

export default Subcribe