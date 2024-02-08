import React from 'react'
function FeaturesCard(props) {
  return (
    <div key={props.obj.id} className={`row align-items-center justify-content-center ${props.className} `} data-aos={props.animation}>
        <img src={props.obj.img} alt={props.alt} className='col-5'/>
        <h2 className='text-center my-3'>{props.obj.title}</h2>
        <p className="lead text-center">{props.obj.text}</p>
    </div>
  )
}

export default FeaturesCard