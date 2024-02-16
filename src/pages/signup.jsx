import React from 'react'
import Header from '../compo/utils/header'
import Plane from '../compo/utils/plane'
import bannerImg1 from '../assets/abt-banner.png'
import { Link } from 'react-router-dom'

function Signup() {
    window.scroll(0, 0)
    return (
        <div className='row col-12 d-flex flex-column'>
            <Header title1="Sign Up" title2="Create your Account" />
            <Plane />
            <div className="row d-flex m-0 my-5 justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-7 d-flex justify-content-center align-items-center" data-aos="fade-right">
                    <img src={bannerImg1} alt="Banner Image" className=" w-100" />
                </div>
                <div className="col-12 col-lg-5 col-md-8 row d-flex align-items-center justify-content-center gap-3 my-md-3 p-0 px-0 px-md-3">
                    <h2 className="lead fs-1 fw-bold" data-aos="fade-left">Signup</h2>
                    <p className="lead fs-5 fw-normal" data-aos="fade-right">Travor is one of the most popular Travel agency explore the world and try to make adventure</p>
                    <div className="col-12 col-md-10 p-2 gap-4 d-flex flex-column">
                        <input type="text" placeholder='Name*' className='p-3 rounded-pill outline-none border-1 border-dark' data-aos="fade-right" />
                        <input type="text" placeholder='Email*' className='p-3 rounded-pill outline-none border-1 border-dark' data-aos="fade-left" />
                        <input type="text" placeholder='Mobile No.*' className='p-3 rounded-pill outline-none border-1 border-dark' data-aos="fade-right" />
                        <input type="text" placeholder='Password*' className='p-3 rounded-pill outline-none border-1 border-dark' data-aos="fade-left" />
                        <input type="text" placeholder='Confirm password*' className='p-3 rounded-pill outline-none border-1 border-dark' data-aos="fade-right" />
                    </div>
                    <span className="btn col-12 col-md-9 btn-primary  btn-oranged rounded-pill py-2 text-light fs-4" data-aos="fade-up">Signup</span>
                    <p className="col-12 col-md-10 my-3 lead fs-5 fw-normal text-center" data-aos="fade-up">Already Have an account</p>
                    <Link className="btn sign-btn col-12 col-md-9 d-flex rounded-pill py-2 text-dark fs-5 gap-2 justify-content-center align-items-center border-dark" data-aos="fade-up" to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup