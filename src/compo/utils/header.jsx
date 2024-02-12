import React from 'react'

function Header(props) {
    return (
        <div className={`col-12 py-0 row d-flex align-items-center justify-content-center ${props.className}`}>
            <h5 className='text-info fs-2 d-flex gap-2 justify-content-center'>{props.title1}</h5>
            <h3 className="display-4 fw-bold text-center">{props.title2}</h3>
            <p className="lead fs-5 col-12 col-md-8 col-lg-6 text-center ">Travor is one of the most popular Travel agency for those who want to explore the world and try to make adventure</p>
        </div>
    )
}

export default Header