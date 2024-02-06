import React from 'react'

function SearchField(props) {
    return (
        <div className={`d-flex flex-columnn flex-md-row flex-wrap justify-content-center align-items-center gap-3 px-2 py-4 py-lg-5 m-auto ${props.className}`}>
            <div className="col-8 col-md-5 col-lg-2 d-flex flex-column px-lg-4">
                <label htmlFor="destination" className="lead fs-6 fw-bold">Destination</label>
                <input type="text" className="lead p-2 border-0 input-fields fs-6" id="destination" placeholder='Search Location' />
            </div>
            <div className="col-8 col-md-5 col-lg-2 d-flex flex-column border-start px-lg-4 border-1 border-0  border-info">
                <label htmlFor="type" className="lead fs-6 fw-bold">Type</label>
                <select className='lead p-2 border-0 input-fields fs-6 fs-6' id='type'>
                    <option value="Adventure">Adventure</option>
                    <option value="Beaches">Beaches</option>
                    <option value="city Tour">city Tour</option>
                    <option value="Honeymoon">Honeymoon</option>
                    <option value="Hiking">Hiking</option>
                    <option value="Museum Tour">Museum Tour</option>
                </select>
            </div>
            <div className="col-8 col-md-5 col-lg-2 d-flex flex-column border-start px-lg-4 border-1 border-info">
                <label htmlFor="date" className="lead fs-6 fw-bold">Date</label>
                <input type="date" className="lead p-2 fs-6 border-0 input-fields fs-6" id='date' />
            </div>
            <div className="col-8 col-md-5 col-lg-2 d-flex flex-column border-start px-lg-4 border-1 border-info">
                <label htmlFor="count" className="lead fs-6 fw-bold">Guest</label>
                <select className='lead p-2 border-0 input-fields fs-6' id='count'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="col-8 col-md-10 col-lg-3 d-flex justify-content-center">
                <span className="btn btn-oranged px-4 br-20 h-fit text-light fw-bold">Find Trip</span>
            </div>
        </div>
    )
}

export default SearchField