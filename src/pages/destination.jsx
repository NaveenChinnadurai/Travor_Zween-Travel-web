import React from 'react'
import Placecard from '../compo/placecard'
import places from '../scripts/places'
import Subcribe from '../compo/subcribe'
import img from '../assets/decoratives/decorImg6.png'
import bollonImg from '../assets/decoratives/decorImg2.png'
function Destination() {
    return (
        <div className='row gap-1 d-flex flex-column align-items-center justify-content-center position-relative'>
            <img src={bollonImg} alt="Decorative Image" className='destination-balloon-decor d-none d-xl-block  z-index-1 position-absolute' />
            <img src={img} alt="Decoratives Images" className='position-absolute destination-page-decorImg d-lg-block' />
            <div className="col-12 mb-5 py-0 my-5 py-md-5 row d-flex align-items-center justify-content-center">
                <h5 className='text-info fs-2 d-flex gap-2 justify-content-center'>Destination</h5>
                <h3 className="display-4 fw-bold text-center">Our Top Destinations</h3>
                <p className="lead fs-5 col-12 col-md-8 col-lg-6 text-center ">Travor is one of the most popular Travel agency for those who want to explore the world and try to make adventure</p>
            </div>
            <div className="row d-flex py-3 px-5 mt-3 m-lg-0 justify-content-center gap-4">
                {
                    places.map((e) => {
                        return (
                            <Placecard
                                className="col-12 col-sm-5 col-md-5 col-lg-3  bg-light p-0 pt-3 br-20 white-bg cur-pointer"
                                obj={e}
                                keys={e.id}
                                animation="flip-right"
                            />
                        )
                    })
                }
            </div>
            <Subcribe className="px-5 my-5"/>
        </div>
    )
}

export default Destination