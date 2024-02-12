import React from 'react'
import FeaturesCard from './cards/featuresCard'
import features from '../scripts/features'
function Features() {
    return (
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
    )
}

export default Features