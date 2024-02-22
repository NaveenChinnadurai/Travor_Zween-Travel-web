import React from 'react'
import Placecard from '../compo/cards/placecard'
import Header from '../compo/utils/header'
import places from '../json/places'
import Plane from '../compo/utils/plane'
function Destination() {
    return (
        <div className='row gap-0 d-flex flex-column align-items-center justify-content-center'>
            <Header title1="Destination" title2="Our Top Destination" className="mt-2 p-0 pt-5 " />
            <Plane/>
            <div className="row d-flex py-3 px-5 mt-0 m-0 mt-md-3 m-lg-0 justify-content-center gap-4">
                {
                    places.map((e,i) => {
                        return (
                            <Placecard
                                className="col-12 col-sm-5 col-md-5 col-lg-3 bg-light p-0 pt-3 br-20 white-bg"
                                obj={e}
                                keys={i}
                                animation="flip-right"
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Destination