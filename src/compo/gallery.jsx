import React from 'react'

/* Images Imports */
import img1 from '../assets/Gallery/img1.jpg'
import img2 from '../assets/Gallery/img2.jpg'
import img3 from '../assets/Gallery/img3.jpg'
import img4 from '../assets/Gallery/img4.jpg'
import img5 from '../assets/Gallery/img5.jpg'
import img6 from '../assets/Gallery/img6.jpg'
import img7 from '../assets/Gallery/img7.jpg'
import img8 from '../assets/Gallery/img8.jpg'
function Gallery() {
    const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8]
    return (
        <div className="col-12 ps-4 ps-md-0 col-md-11 d-flex flex-column px-md-5 px-3 mb-5">
            <h2 className="lead fs-3 fw-bold" data-aos="fade-up">Gallery</h2>
            <p className="lead fw-normal fs-5 col-12 col-md-8 col-lg-7 mt-1" data-aos="fade-right">Some Basic information about that can help you a lot when you visit so check out all the information before starting your tour</p>
            <div className="d-flex row col-12 pe-md-5 d-flex justify-content-left justify-content-md-start">
                {
                    imgArr.map((e, i) => {
                        return (
                            <div className="col-4 col-sm-4 col-md-6 col-lg-3 d-flex justify-content-center my-2" key={i} data-aos={i % 2 == 0 ? "flip-right" : "flip-left"}>
                                <img src={e} alt="Gallery Img" className='img-fluid br-20' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery