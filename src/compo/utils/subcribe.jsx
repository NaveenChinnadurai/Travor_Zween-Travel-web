import React from 'react'
import icon from '../../assets/icons/newsletter.png'
import Heading from './heading'
function Subcribe(props) {
    return (
        <div className={`m-0 row justify-content-start justify-content-md-evenly subscribe-div py-5 px-3 gap-4 gap-lg-0 col-10 mb-5 ${props.className}`}>
            <div className="col-10 col-md-8 col-lg-4 d-flex flex-column justify-content-center align-items-start" data-aos="fade-left">
                <Heading title="Our Newsletter" img={icon}/>
                <h1>Subscribe our <br /><span className="text-orange text-decoration-underline">Newsletter</span> now!</h1>
                <p className="lead">For latest updates & Promotions</p>
            </div>
            <div className="col-12 col-md-8 px-4 row col-lg-5 d-flex flex-column gap-3 align-items-start align-items-md-center justify-content-center position-relative" data-aos="fade-right">
                <input type="text" placeholder='Enter Your Email Here' className='col-12 p-2 px-3 p-md-3 p-lg-3 rounded-pill border-info subscribe-input' />
                <span className="btn btn-info px-4 py-2 rounded-pill subscribe-btn w-fit">Subscribe</span>
            </div>
        </div>
    )
}

export default Subcribe