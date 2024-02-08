import React from 'react'
import bannerImg from '../assets/bannerImg.png'
import bannerImg1 from '../assets/bannerImg1.png'
import location from '../assets/icons/location.png'
import miniWorld from '../assets/icons/miniWorld.png'
import cooler from '../assets/icons/cooler.png'
import FeaturesCard from '../compo/featuresCard'
import features from './../scripts/features'
import places from './../scripts/places'
import Placecard from '../compo/placecard'
import travelImg1 from '../assets/Travel/travelImg1.png'
import travelImg2 from '../assets/Travel/travelImg2.png'
import decorImg4 from '../assets/decoratives/decorImg4.png'
import decorImg5 from '../assets/decoratives/decorImg5.png'
import Subcribe from '../compo/subcribe'
import testimonial from '../assets/testimonial.png'
import badgeIcon from './../assets/icons/badge.png'
import discount from '../assets/icons/discount.png'
import packageInfo from '../scripts/package'
import Package from '../compo/package'
import travelIcon from '../assets/icons/tripPackage.png'
import SearchField from '../compo/searchField'
import bollonImg from '../assets/decoratives/decorImg2.png'
import planeImg from '../assets/decoratives/decorImg1.png'
import { BiSolidQuoteLeft as Quotes } from "react-icons/bi";
function Home() {
    return (
        <div className='row m-0 mt-5 p-0 position-relative'>
            <img src={bollonImg} alt="Decorative Image" className='balloon-decor d-none d-xl-block  z-index-1 position-absolute' />
            <img src={planeImg} alt="Decorative Image" className='plane-decor position-absolute z-index-1 d-none d-xl-block ' />
            <div className="m-0 col-12 row d-flex justify-content-center align-items-center flex-column flex-lg-row">
                <div className="col-12 col-lg-6 col-md-10 col-xl-5 row d-flex gap-3">
                    <h4 className='text-info d-flex gap-2' data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">Explore the World
                        <img src={miniWorld} alt="Mini World Image" className="img-fluid" />
                    </h4>
                    <h1 className='display-3' data-aos="fade-up" data-aos-delay="150" data-aos-duration="900">Let’s find your<br />dream <span className="text-orange">Destination</span><br /> make with enjoy</h1>
                    <p className="lead" data-aos="fade-up">Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure</p>
                    <div className=" d-flex py-0 p-0 px-3 gap-4 h-fit" data-aos-delay="150" data-aos-duration="800">
                        <span className="btn btn-oranged px-4 br-20 h-fit text-light fw-bold" data-aos="fade-right">Plan a Trip</span>
                        <span className="btn text-decoration-underline text-info h-fit" data-aos="fade-left">Get price</span>
                    </div>
                </div>
                <div data-aos="fade-up" className="col-10 col-lg-6 col-xl-5 d-flex align-items-center justify-content-lg-end justify-content-center my-4 my-lg-0">
                    <img src={bannerImg} alt="Explore the world" className="img-fluid" />
                </div>
            </div>
            <SearchField className="col-10 border border-1 border-dark my-0 mb-4 my-lg-5 search-field-div" />
            <div className="m-0 row d-flex align-items-center justify-content-center">
                <h1 className="col-12 col-md-8 text-center fw-bold" data-aos="fade-up">We <span className="text-orange">always</span> focus on best Benefits as well as Professional Service</h1>
                <div className="col-12 row d-flex justify-content-center align-items-center gap-5 my-4">
                    {
                        features.map((e) => {
                            return (
                                <FeaturesCard
                                    className="col-12 col-md-4 col-lg-3 px-2 py-3"
                                    animation="flip-right"
                                    obj={e}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="row d-flex m-0 justify-content-between align-items-center mb-5 px-lg-5 px-md-3">
                <div className="col-12 col-lg-5 col-md-7 d-flex flex-column" data-aos="fade-up">
                    <h4 className='text-info d-flex gap-2'>Most Attractive
                        <img src={location} alt="Mini World Image" className="img-fluid" height={5} width={30} />
                    </h4>
                    <h1>Popular <span className="text-orange">Destination</span><br /> we offer for all</h1>
                </div>
                <div className="col-12 col-md-5 col-lg-5 d-flex flex-column" data-aos="zoom-out-left">
                    <p className="lead fw-bold"><span className="text-info">850+</span> Destinations</p>
                    <p className='lead fw-normal mx-3 px-3 border-info border-2 border-start col-12'>Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure</p>
                </div>
            </div>
            <div className="row d-flex m-0 justify-content-evenly gap-3 px-5 flex-lg-nowrap">
                {
                    places.map((e) => {
                        if (e.id < 5) {
                            return (
                                <Placecard
                                    className="col-12 col-sm-8 col-md-4 col-lg-3 bg-light p-0 pt-3 br-20 white-bg cur-pointer"
                                    obj={e}
                                    animation={e.id % 2 == 0 ? "flip-right" : "flip-left"}
                                    keys={e.id}
                                />
                            )
                        }
                    })
                }
            </div>
            <div className="row d-flex m-0 my-5 justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-center align-items-center" data-aos="fade-right">
                    <img src={bannerImg1} alt="Banner Image" className="img-fluid w-100" />
                </div>
                <div className="col-12 col-lg-6 col-md-10 col-xl-6 row d-flex gap-3 my-md-3">
                    <h4 className='text-info d-flex gap-2' data-aos="fade-up">Welcome to Travor
                        <img src={cooler} alt="Mini World Image" className="img-fluid" />
                    </h4>
                    <h1 className='display-5 col-12' data-aos="fade-up">We Recommend<br /> Beautiful <span className="text-orange">Destination</span><br /> every month dream </h1>
                    <p className="lead col-12" data-aos="fade-up">Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure as well as we can provide beautiful  destination around the world and make you trip</p>
                    <span className="btn btn btn-oranged px-4 py-2 rounded-pill w-fit h-fit text-light fw-normal fs-6" data-aos="fade-left">Learn More</span>
                </div>
            </div>
            <div className="m-0 row d-flex flex-column justify-content-center align-items-center">
                <h4 className='text-info d-flex gap-2 col-12 justify-content-center' data-aos="fade-up">
                    Tour Packages
                    <img src={travelIcon} alt="badge icon" className="img-fluid" width={30} />
                </h4>
                <h1 className='display-6 fw-bold gap-1 d-flex justify-content-center' data-aos="fade-up">
                    Most <span className="text-orange text-decoration-underline">Attractive</span> Packages
                </h1>
                <p className="lead col-11 col-md-8 col-lg-5 text-center" data-aos="fade-up">Travor is one of the most popular Travel agency for who want to explore the wold with adventure</p>
            </div>
            <div className="row d-flex m-0 justify-content-center gap-5 mb-5 px-md-0 px-3">
                {
                    packageInfo.map((e) => {
                        if (e.id < 4) {
                            return (
                                <Package
                                    obj={e}
                                    keys={e.id}
                                    animation={e.id % 2 == 0 ? "zoom-out-left" : "zoom-out-right"}
                                    className="col-12 col-md-6 col-lg-3 pt-4 br-20 white-bg d-flex flex-column justify-content-center align-items-center"
                                />
                            )
                        }
                    })
                }
            </div>
            <div className="container-fluid m-0 row justify-content-center align-items-start position-relative">
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
            <div className="container-fluid m-0 row py-5 justify-content-lg-center gap-2">
                <div className="col-12 col-md-8 col-lg-3 py-3 align-self-start">
                    <h5 className='text-info d-flex gap-2' data-aos="fade-left">
                        Discount offer
                        <img src={discount} alt="badge icon" className="img-fluid" width={30} />
                    </h5>
                    <h1 className='display-6 fw-bold' data-aos="fade-right">
                        <span className="text-orange">Enjoy </span>
                        the Trip with
                        <span className="text-info"> exciting</span> Discount
                    </h1>
                    <span className="btn btn-warning rounded-pill px-4 py-2 my-3 fs-6" data-aos="fade-right">View More</span>
                </div>
                <div className=" col-12 col-lg-8 row d-flex align-items-center gap-4">
                    {
                        packageInfo.map((e) => {
                            if (e.id < 4) {
                                return (
                                    <Package
                                        obj={e}
                                        keys={e.id}
                                        animation={e.id % 2 == 0 ? "flip-left" : "flip-right"}
                                        className = "col-12 col-sm-5 col-md-5 col-lg-5 pt-4 br-20 white-bg d-flex flex-column justify-content-center align-items-center"
                                />
                                )
                    }
                        })
                    }
                </div>
            </div>
            <div className="container-fluid row m-0 d-flex justify-content-center align-items-center">
                <div data-aos="fade-left" className="col-12 col-sm-9 col-lg-5  col-md-7 d-flex-justify-content-center-align-item-center pb-4 pb-md-5 pb-lg-0 ">
                    <img src={testimonial} alt="Testimonial Banner" className="img-fluid" />
                </div>
                <div className="col-12 col-sm-9 col-md-7  col-lg-5 d-flex flex-column" data-aos="fade-right">
                    <h4 className='text-info d-flex gap-2' data-aos="fade-up">
                        Our Testimonials
                        <img src={badgeIcon} alt="badge icon" className="img-fluid" width={30} />
                    </h4>
                    <h1 className='display-5 col-12 fw-bold' data-aos="fade-up">Happy <span className="text-orange">Travelers</span> <span className="text-info">expression</span></h1>
                    <div className="lead col-12 py-4 d-flex flex-column gap-3">
                        <span className="display-6 fw-bold text-dark p-0 fs-1" data-aos="fade-up"><Quotes /></span>
                        <p data-aos="fade-up">Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure as well as we can provide</p>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="text-info" data-aos="fade-left" data-aos-duration="1200">Tony Smith</h5>
                        <h6 className="text-dark fw-normal" data-aos="fade-right" data-aos-duration="1200">Banker, Thailand</h6>
                    </div>
                </div>x-
            </div>
            <Subcribe />
        </div>
    )
}

export default Home