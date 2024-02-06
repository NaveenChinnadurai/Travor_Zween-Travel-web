import React from 'react'
import mainLogo from '../assets/mainlogo.png'
import { FaInstagram as Insta, FaXTwitter as X, FaSquareFacebook as Fb } from "react-icons/fa6";
import { IoLocationOutline as Location ,IoMailOutline  as Mail}  from "react-icons/io5";
import { FaPhoneAlt as Phone} from "react-icons/fa";
function Footer() {
    return (
        <div className='container-fluid m-0 row d-flex justify-content-md-between justify-content--center align-items-center p-2 p-md-5 pb-0 pt-5 footer-bg gap-2'>
            <div className="col-12 col-md-3">
                <img src={mainLogo} alt="MainLogo" />
                <p className="lead my-3 fw-normal">Travor is one of the most popular Travel agency for those who want to explore the wold</p>
                <div className="d-flex gap-3">
                    <span className="fs-4 btn-orange p-2 rounded-circle d-flex justify-content-center align-items-center"><Insta/></span>
                    <span className="fs-4 btn-orange p-2 rounded-circle d-flex justify-content-center align-items-center"><X /></span>
                    <span className="fs-4 btn-orange p-2 rounded-circle d-flex justify-content-center align-items-center"><Fb /></span>
                </div>
            </div>
            <ul className="col-5 col-md-2 my-3 my-md-0">
                <li className='lead fw-normal fs-5 mb-1'>Home</li>
                <li className='lead fw-normal fs-5 mb-1'>About</li>
                <li className='lead fw-normal fs-5 mb-1'>Packages</li>
                <li className='lead fw-normal fs-5 mb-1'>Destination</li>
                <li className='lead fw-normal fs-5 mb-1'>Contacts</li>
            </ul>
            <ul className="col-5 col-md-2 my-3 my-md-0">
                <li className='lead fw-normal fs-5 mb-1'>Gallery</li>
                <li className='lead fw-normal fs-5 mb-1'>Support</li>
                <li className='lead fw-normal fs-5 mb-1'>Login</li>
                <li className='lead fw-normal fs-5 mb-1'>Register</li>
            </ul>
            <div className=" col-12 col-md-4">
                <p className="lead fs-6 fw-normal mb-1 d-flex gap-1 align-items-start"><Location className='fs-5'/>27/S Nazween Colony, NS Tower,<br /> Chennai, Tamilnadu.</p>
                <p className="lead fs-6 fw-normal mb-1 my-4 v d-flex gap-1"><Phone/>+121 567 6552 <br />+121 2739 7239</p>
                <p className="lead fs-6 fw-normal mb-1 v d-flex gap-1 align-items-center my-3"><Mail/>zweenwebhub@gmail.com</p>
            </div>
            <div className="col-12 mt-4">
                <p className="lead fw-normal fs-6">&copy; 2024 developed by Naveen Chinnadurai.</p>
            </div>
        </div>
    )
}

export default Footer