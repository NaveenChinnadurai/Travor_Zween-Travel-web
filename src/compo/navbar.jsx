import React, { useState } from 'react'
import logo from '../assets/mainLogo.png'
import { GiHamburgerMenu as BurgerBtn } from "react-icons/gi";
import { RxCross2 as Cross} from "react-icons/rx";
import { Link } from 'react-router-dom';
function Navbar() {
    const [page, setPage] = useState("Home")
    const changePage=(e)=>{
        setPage(e)
    }
    const desktopStyle="col-7 col-lg-8 col-xl-7 d-lg-flex justify-content-lg-evenly d-none"
    const mobileStyle="bg-light d-flex flex-column p-0 py-5 gap-1 position-absolute top-0 start-0 navbar-mobile"
    const [mobileView, setMobileView] = useState(desktopStyle)
    const burgerClick = () => {
        setMobileView(mobileStyle)
    }
    const crossClick=()=>{
        setMobileView(desktopStyle)
    }
    return (
        <div className='m-0 row col-12 p-4 px-lg-5 p-0 d-flex justify-content-between align-item-lg-center navbar-div'>
            <Link className="col-6 col-lg-2 link" to="/">
                <img src={logo} alt="Logo image" className="img-fluid" />
            </Link>
            <div className={`${mobileView}`}>
                <div className="col-12 d-lg-none d-flex justify-content-center py-2">
                    <img src={logo} alt="Logo image" className="img-fluid pb-3" />
                </div>
                <span className="position-absolute cross-btn d-lg-none fs-1 fw-bold" onClick={crossClick}><Cross/></span>
                <ul className="d-lg-flex d-flex flex-column flex-lg-row gap-4 justify-content-between p-0 m-0">
                    <li className='fs-20 d-flex justify-content-center align-items-center' onClick={crossClick}><Link onClick={()=>{changePage("Home")}} to="/" className={`link ${page=="Home"?"active":""}`}>Home</Link></li>
                    <li className='fs-20 d-flex justify-content-center align-items-center' onClick={crossClick}><Link onClick={()=>{changePage("Destination")}} to="/destination" className={`link ${page=="Destination"?"active":""}`}>Destination</Link></li>
                    <li className='fs-20 d-flex justify-content-center align-items-center' onClick={crossClick}><Link onClick={()=>{changePage("Package")}} to="/package" className={`link ${page=="Package"?"active":""}`}>Packages</Link></li>
                    <li className='fs-20 d-flex justify-content-center align-items-center' onClick={crossClick}><Link onClick={()=>{changePage("Offers")}} to="/offers" className={`link ${page=="Offers"?"active":""}`}>Offers</Link></li>
                    <li className='fs-20 d-flex justify-content-center align-items-center' onClick={crossClick}><Link onClick={()=>{changePage("About")}} to="/about" className={`link ${page=="About"?"active":""}`}>About</Link></li>
                    <li className='fs-20 d-flex justify-content-center align-items-center' onClick={crossClick}><Link onClick={()=>{changePage("Contact")}} to="/contact" className={`link ${page=="Contact"?"active":""}`}>Contact</Link></li>
                </ul>
                <div className="p-0 d-lg-flex d-flex flex-column flex-lg-row my-lg-0 my-3 gap-2 align-items-center ">
                    <span className="btn btn-outline px-4 d-flex align-items-center w-fit" onClick={crossClick}><Link className="text-decoration-none link" to="/login">Login</Link></span>
                    <Link className="text-decoration-none link btn text-light rounded-pill px-4 d-flex align-items-center w-fit bg-primary" to="/signup">Signup</Link>
                </div>
            </div>
            <span className="col-1 fs-20 d-lg-none p-0" onClick={burgerClick}><BurgerBtn /></span>
        </div>
    )
}

export default Navbar