import React from 'react'
import bannerImg from '../assets/bannerImg.png'
import bannerImg1 from '../assets/bannerImg1.png'
import location from '../assets/icons/location.png'
import miniWorld from '../assets/icons/miniWorld.png'
import cooler from '../assets/icons/cooler.png'
import discount from '../assets/icons/discount.png'
import travelIcon from '../assets/icons/tripPackage.png'
import SearchField from '../compo/utils/searchField'
import bollonImg from '../assets/decoratives/decorImg2.png'
import planeImg from '../assets/decoratives/decorImg1.png'
import places from './../scripts/places'
import PackageCard from '../compo/cards/package'
import OfferCard from '../compo/cards/offerCard'
import Placecard from '../compo/cards/placecard'
import Features from '../compo/features';
import Heading from '../compo/utils/heading';
import Testimonial from '../compo/testimonial'
import Offer from '../compo/offer'
function Home() {
    return (
        <div className='row m-0 mt-5 p-0 position-relative d-flex justify-content-center'>
            <img src={bollonImg} alt="Decorative Image" className='balloon-decor d-none d-xl-block  z-index-1 position-absolute' />
            <img src={planeImg} alt="Decorative Image" className='plane-decor position-absolute z-index-1 d-none d-xl-block ' />
            <div className="m-0 col-12 row d-flex justify-content-center align-items-center flex-column flex-lg-row pb-20">
                <div className="col-12 col-lg-6 col-md-10 col-xl-5 row d-flex gap-3">
                    <Heading title="Explore the World" img={miniWorld} />
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
            <SearchField className="col-10 my-0 mb-4 my-lg-5" />
            <Features />
            <div className="row d-flex m-0 justify-content-between align-items-center mb-5 px-lg-5 px-md-3">
                <div className="col-12 col-lg-5 col-md-7 d-flex flex-column" data-aos="fade-up">
                    <Heading title="Most Attractive" img={location} />
                    <h1>Popular <span className="text-orange">Destination</span><br /> we offer for all</h1>
                </div>
                <div className="col-12 col-md-5 col-lg-5 d-flex flex-column" data-aos="zoom-out-left" data-aos-duration="1000">
                    <p className="lead fw-bold"><span className="text-info">850+</span> Destinations</p>
                    <p className='lead fw-normal mx-3 px-3 border-info border-2 border-start col-12'>Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure</p>
                </div>
            </div>
            <div className="row d-flex m-0 justify-content-evenly gap-3 px-5 flex-lg-nowrap p-0">
                {
                    places.map((e) => {
                        if (e.id < 5) {
                            return (
                                <Placecard
                                    className="col-12 m-0 col-sm-8 col-md-4 col-lg-3 bg-light p-0 pt-3 br-20 white-bg cur-pointer"
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
                    <Heading title="Welcome to Travor" img={cooler} />
                    <h1 className='display-5 col-12' data-aos="fade-up">We Recommend<br /> Beautiful <span className="text-orange">Destination</span><br /> every month dream </h1>
                    <p className="lead col-12" data-aos="fade-up">Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure as well as we can provide beautiful  destination around the world and make you trip</p>
                    <span className="btn btn btn-oranged px-4 py-2 rounded-pill w-fit h-fit text-light fw-normal fs-6" data-aos="fade-left">Learn More</span>
                </div>
            </div>
            <div className="m-0 row d-flex flex-column justify-content-center align-items-center">
                <div className="col-12 col-md-5 justify-content-center">
                    <Heading title="Tour Packages" img={travelIcon} className="justify-content-center"/>
                    <h1 className='display-6 fw-bold gap-1 d-flex justify-content-center' data-aos="fade-up">
                        Most <span className="text-orange text-decoration-underline">Attractive</span> Packages
                    </h1>
                </div>
                <p className="lead col-11 col-md-8 col-lg-5 text-center" data-aos="fade-up">Travor is one of the most popular Travel agency for who want to explore the wold with adventure</p>
            </div>
            <div className="row d-flex m-0 justify-content-center gap-5 mb-5 px-md-0 px-3">
                {
                    places.map((e) => {
                        if (e.id < 4) {
                            return (
                                <PackageCard
                                    obj={e.packageInfo}
                                    keys={e.id}
                                    animation={e.id % 2 == 0 ? "zoom-out-left" : "zoom-out-right"}
                                    className="col-11 col-sm-6 col-md-4 col-lg-3 "
                                />
                            )
                        }
                    })
                }
            </div>
            <Offer/>
            <div className="m-0 row py-5 px-0 px-md-3 justify-content-lg-center gap-2">
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
                    <span className="btn rounded-pill bg-warning px-4 py-2 my-3 fs-6" data-aos="fade-right">View More</span>
                </div>
                <div className=" col-12 col-lg-8 row d-flex m-0 align-items-center justify-content-center justify-content-md-start gap-lg-4 gap-4 p-2">
                    {
                        places.map((e) => {
                            if (e.id < 4) {
                                return (
                                    <OfferCard obj={e} animation={e.id % 2 == 0 ? "zoom-out-left" : "zoom-out-right"} />
                                )
                            }
                        })
                    }
                </div>
            </div>
            <Testimonial/>
        </div>
    )
}

export default Home