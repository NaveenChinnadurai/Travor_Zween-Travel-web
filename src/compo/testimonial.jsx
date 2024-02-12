import React from 'react'
import { BiSolidQuoteLeft as Quotes } from "react-icons/bi";
import testimonial from '../assets/testimonial.png'
import badgeIcon from './../assets/icons/badge.png'
import Heading from './utils/heading';
function Testimonial() {
    return (
        <div className="container-fluid row m-0 d-flex justify-content-center align-items-center pb-5">
            <div data-aos="fade-left" className="col-12 col-sm-9 col-lg-5  col-md-7 d-flex-justify-content-center-align-item-center pb-4 pb-md-5 pb-lg-0 ">
                <img src={testimonial} alt="Testimonial Banner" className="img-fluid" />
            </div>
            <div className="col-12 col-sm-9 col-md-7  col-lg-5 d-flex flex-column" data-aos="fade-right">
                <Heading title="Our Testimonials" img={badgeIcon}/>
                <h1 className='display-5 col-12 fw-bold' data-aos="fade-up">Happy <span className="text-orange">Travelers</span> <span className="text-info">expression</span></h1>
                <div className="lead col-12 py-4 d-flex flex-column gap-3">
                    <span className="display-6 fw-bold text-dark p-0 fs-1" data-aos="fade-up"><Quotes /></span>
                    <p data-aos="fade-up">Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure as well as we can provide</p>
                </div>
                <div className="d-flex flex-column">
                    <h5 className="text-info" data-aos="fade-left" data-aos-duration="1200">Tony Smith</h5>
                    <h6 className="text-dark fw-normal" data-aos="fade-right" data-aos-duration="1200">Banker, Thailand</h6>
                </div>
            </div>
        </div>
    )
}

export default Testimonial