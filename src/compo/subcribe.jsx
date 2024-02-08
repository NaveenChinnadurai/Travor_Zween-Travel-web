import React from 'react'
import icon from '../assets/icons/newsletter.png'
function Subcribe(props) {
    return (
        <div className={`m-0 row justify-content-start justify-content-md-evenly subscribe-div py-5 gap-4 gap-lg-0 col-10 ${props.className}`}>
            <div className="col-10 col-md-8 col-lg-4 d-flex flex-column justify-content-center align-items-start" data-aos="fade-left">
                <h2 className="lead d-flex gap-2 fw-normal">
                    Our Newsletter
                    <img src={icon} alt="newletter" />
                </h2>
                <h1>Subscribe our <br /><span className="text-orange text-decoration-underline">Newsletter</span> now!</h1>
                <p className="lead">For latest updates & Promotions</p>
            </div>
            <div className="col-10 col-md-8 col-lg-5 d-flex flex-column gap-3 align-items-start align-items-md-center justify-content-center position-relative p-0" data-aos="fade-right">
                <input type="text" placeholder='Enter Your Email Here' className='w-100 p-3 p-lg-3 rounded-pill border-info subscribe-input' />
                <span className="btn btn-info px-4 py-2 rounded-pill subscribe-btn">Subscribe</span>
            </div>
        </div>
    )
}

export default Subcribe