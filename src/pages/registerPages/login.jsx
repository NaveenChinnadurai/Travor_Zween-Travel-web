import React from 'react'
import Header from '../../compo/utils/header'
import Plane from '../../compo/utils/plane'
import bannerImg1 from '../../assets/abt-banner.png'
import { FcGoogle as Google} from "react-icons/fc";
import { FaSquareFacebook as FB } from "react-icons/fa6";
function Login() {
    return (
        <div className='row col-12 d-flex flex-column'>
            <Header title1="Sign In" title2="Login with your Account" />
            <Plane />
            <div className="row d-flex m-0 my-5 justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-7 d-flex justify-content-center align-items-center" data-aos="fade-right">
                    <img src={bannerImg1} alt="Banner Image" className=" w-100" />
                </div>
                <div className="col-12 col-lg-5 col-md-8 row d-flex align-items-center justify-content-center gap-3 my-md-3 p-0 px-0 px-md-3">
                    <h2 className="lead fs-1 fw-bold" data-aos="fade-left">Login</h2>
                    <p className="lead fs-5 fw-normal" data-aos="fade-right">Travor is one of the most popular Travel agency explore the world and try to make adventure</p>
                    <div className="col-12 col-md-10 p-2 gap-4 d-flex flex-column">
                        <input type="text" placeholder='Email*' className='p-3 rounded-pill outline-none border-1 border-dark' data-aos="fade-right"/>
                        <input type="text" placeholder='Password*' className='p-3 rounded-pill outline-none border-1 border-dark' data-aos="fade-left"/>
                    </div>
                    <div className="col-12 col-md-10 row d-flex justify-content-between align-items-center">
                        <div className="w-fit p-0 d-flex gap-2" data-aos="fade-left">
                            <input type="radio" id="remember" />
                            <label htmlFor="remember" className="lead fs-6 fw-normal">Remember me</label>
                        </div>
                        <p className="w-fit lead fw-normal text-info fs-6 p-0 m-0" data-aos="fade-right">Forget Password</p>
                    </div>
                    <span className="btn col-12 col-md-9 btn-primary  btn-oranged rounded-pill py-2 text-light fs-4" data-aos="fade-up">Login</span>
                    <p className="col-12 col-md-10 my-3 lead fs-5 fw-normal text-center" data-aos="fade-up">or signin with</p>
                    <span className="btn sign-btn col-12 col-md-9 d-flex rounded-pill py-2 text-dark fs-5 gap-2 justify-content-center align-items-center border-dark" data-aos="fade-up"><Google />Sign in with Google</span>
                    <span className="btn sign-btn col-12 col-md-9 d-flex rounded-pill py-2 text-dark fs-5 gap-2 justify-content-center align-items-center border-dark" data-aos="fade-up"><FB />Sign in with Facebook</span>
                </div>
            </div>
        </div>
    )
}

export default Login