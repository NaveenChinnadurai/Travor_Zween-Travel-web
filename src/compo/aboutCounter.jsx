import React from 'react'
import img1 from '../assets/icons/world.png'
import img2 from '../assets/icons/camera.png'
import img3 from '../assets/icons/bag.png'
import img4 from '../assets/icons/reviews.png'
function AboutCounter() {
    const details = [
        {
            img: img1,
            title: "Destinations",
            count:145
        },
        {
            img: img2,
            title: "Travelers",
            count:100
        },
        {
            img: img3,
            title: "Packages",
            count:30
        },
        {
            img: img4,
            title: "Reviews",
            count:12
        },
    ]
    return (
        <div className='row col-12 d-flex justify-content-center justify-content-md-evenly p-3 py-2 py-md-5'>
            {
                details.map((e)=>{
                    return(
                        <div className="row col-7 col-sm-3 m-2 my-2 col-md-3 col-lg-2 d-flex align-items-center justify-content-center counter-card">
                            <div className='col-6 col-sm-5'>
                                <img src={e.img} alt={e.title} className='w-100' />
                            </div>
                            <div className="col-6  d-flex flex-column p-0">
                                <h2 className='p=0 display-6 fw-bold'>{e.count}K+</h2>
                                <h2 className='p=0 lead fw-normal'>{e.title}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AboutCounter