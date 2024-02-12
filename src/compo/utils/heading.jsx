import React from 'react'

function Heading(props) {
    return (
        <div className={`col-12 d-flex align-items-center gap-3 ${props.className}`}  data-aos="fade-up">
            <h4 className='text-info d-flex gap-2 m-0'>{props.title}</h4>
            <div className="col-1">
                <img src={props.img} alt="Header Image" className="w-100" />
            </div>
        </div>
    )
}

export default Heading