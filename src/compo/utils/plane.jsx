import React from 'react'
import img from '../../assets/decoratives/decorImg6.png'
import bollonImg from '../../assets/decoratives/decorImg2.png'
function Plane() {
    return (
        <div className="col-12 d-flex justify-content-end align-items-center">
            <img src={bollonImg} alt="Decorative Image" className='destination-balloon-decor d-none d-xl-block col-1 z-index-1 position-absolute' />
            <img src={img} alt="Decoratives Images" className='destination-page-decorImg d-lg-block' />
        </div>
    )
}

export default Plane