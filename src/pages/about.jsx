import React from 'react'
import Header from '../compo/utils/header'
import Features from '../compo/features'
import cooler from '../assets/icons/cooler.png'
import bannerImg1 from '../assets/abt-banner.png'
import Heading from '../compo/utils/heading'
import Testimonial from '../compo/testimonial'
import AboutCounter from '../compo/aboutCounter'
import location from '../assets/icons/location.png'
import team1 from '../assets/team/team1.jpg'
import team2 from '../assets/team/team2.jpg'
import team3 from '../assets/team/team3.jpg'
import team4 from '../assets/team/team4.jpg'
import Offer from '../compo/offer'
import Plane from '../compo/utils/plane'
function About() {
    const teamInfo = [
        {
            id:1,
            img: team1,
            name: 'Morgan Smith',
            role: 'CEO, Founder'
        },
        {
            id:2,
            img: team2,
            name: 'Oliver Milton',
            role: 'Marketing Manager'
        },
        {
            id:3,
            img: team3,
            name: 'Anthoney Williams',
            role: 'Tour Guide'
        },
        {
            id:4,
            img: team4,
            name: 'Sara Smith',
            role: 'Tour Educator'
        },
    ]
    const Teamcard = (props) => {
        return (
            <div className="p-3 br-20 col-12 white-bg col-sm-5 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center" data-aos={props.animation}>
                <img src={props.obj.img} alt={props.obj.name} className='br-20 w-100' />
                <h2 className="fs-4 lead  fw-normal mt-3">{props.obj.name}</h2>
                <h2 className="fs-6 fw-normal">{props.obj.role}</h2>
            </div>
        )
    }
    return (
        <div className='row d-flex flex-column justify-content-center align-items-center'>
            <Header title1="About" title2="Know About us" />
            <Plane/>
            <div className="row d-flex m-0 my-5 justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-center align-items-center" data-aos="fade-right">
                    <img src={bannerImg1} alt="Banner Image" className="img-fluid w-100" />
                </div>
                <div className="col-12 col-lg-5 col-md-10 row d-flex gap-3 my-md-3 p-0 px-3 px-md-0">
                    <Heading title="Welcome to Travor" img={cooler} />
                    <h1 className='display-6 col-12' data-aos="fade-up">We Recommend<br /> Beautiful <span className="text-orange">Destination</span><br /> every month dream </h1>
                    <p className="lead col-12 fs-5 fw-normal" data-aos="fade-up">Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure as well as we can provide beautiful  destination around the world and make you trip</p>
                    <div className="col-12 d-flex gap-3 gap-md-5">
                        <span className="btn btn btn-oranged px-4 py-2 rounded-pill w-fit h-fit text-light fw-normal fs-6 myBtn" data-aos="fade-left">Learn More</span>
                        <p className='fs-6 fw-bold' data-aos="fade-right">For more information <br /> +01234 567 890</p>
                    </div>
                </div>
            </div>
            <Features />
            <div className="row d-flex m-0 justify-content-left align-items-center mb-5 px-lg-5 px-md-3">
                <div className="col-10 col-sm-7 col-md-5 col-lg-5 d-flex flex-column" data-aos="fade-up">
                    <Heading title="Travel guide" img={location} />
                    <h1>Meet our <span className="text-orange">Dedicated </span><br />Team</h1>
                </div>
                <div className="col-12 col-md-10 my-3 my-lg-0 col-lg-7 d-flex flex-column" data-aos="zoom-out-left" data-aos-duration="1000">
                    <p className='lead fw-normal mx-3 px-md-5 px-3 border-info border-2 border-start col-12'>Travor is one of the most popular Travel agency for those who want to explore the wold and try to make adventure</p>
                </div>
            </div>
            <div className='d-flex justify-content-center gap-4 gap-lg-0 col-12 px-5 flex-wrap'>
                {
                    teamInfo.map((e) => {
                        return (
                            <Teamcard obj={e} animation={e.id%2==0?"fade-left":"fade-right"}/>
                        )
                    })
                }
            </div>
            <Testimonial />
            <AboutCounter />
            <Offer />
        </div>
    )
}

export default About