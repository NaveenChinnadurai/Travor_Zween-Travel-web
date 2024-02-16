import React from 'react'
import Header from '../compo/utils/header'
import places from '../scripts/places'
import OfferCard from '../compo/cards/offerCard'
import AboutCounter from '../compo/aboutCounter'
import Plane from '../compo/utils/plane'
function Offers() {
    window.scroll(0,0)
    return (
        <div className='row col-12 d-flex flex-column justify-content-center align-items-center p-0 m-0'>
            <Header title1="Discount" title2="Our Discount Offer" className="mt-2 pt-3" />
            <Plane/>
            <div className="col-12 d-flex flex-wrap justify-content-center flex-wrap gap-3 pb-5">
                {
                    places.map((e) => {
                        return (
                            <OfferCard obj={e} className="col-8 card col-lg-2" animation={e.id % 2 == 0 ? "zoom-out-left" : "zoom-out-right"} />
                        )
                    })
                }
            </div>
            <AboutCounter/>
        </div>
    )
}

export default Offers