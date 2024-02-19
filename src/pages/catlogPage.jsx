import Header from '../compo/utils/header'
import Plane from '../compo/utils/plane'
import bannerImg from '../assets/placesImg/maldivesImg.png'
import aboutImg from '../assets/placesImg/bannerImg.png'
import Gallery from '../compo/gallery'

function CatlogPage() {
  const data = JSON.parse(document.cookie);
  console.log(data)
  return (
    <div className='row d-flex flex-column justify-content-center align-items-center'>
      <Header title1="Destinations" title2={data.title} type="subPage" className="my-5" />
      <Plane />
      <div className="col-12 d-flex px-4 px-md-0 flex-column flex-md-row justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-5 d-flex flex-column justify-content-center">
          <h2 className="lead fs-5 text-info fw-normal ">{data.title} Trip</h2>
          <h1 className="lead display-6 fw-normal col-10">Explore the Beauty of {data.title} adventure</h1>
          <div className="col-12 col-md-6 col-lg-5 d-md-none ">
            <img src={bannerImg} alt="Banner Image" className='img-fluid' />
          </div>
          <p className="lead fs-5 my-5">Travor is one of the most popular Travel agency for those explore the world and try to make adventure as well as we can beautiful destination around the world and make you trip you explore the beautiful Maldives with great facilities <br /><br />Travor is one of the most popular Travel agency for those  explore the world and try to make adventure as we provide beautiful destination around the world and make you trip</p>
        </div>
        <div className="col-12 col-md-6 col-lg-5 d-none d-md-block">
          <img src={bannerImg} alt="Banner Image" className='img-fluid' />
        </div>
      </div>
      <div className=".col-12 d-flex flex-md-row-reverse justify-content-center align-items-center px-4">
        <div className="col-12 col-md-6 col-lg-5 d-flex flex-column justify-content-center">
          <h1 className="lead display-5 fw-bold text-center mb-md-3">About {data.title}</h1>
          <div className="col-12 d-md-none mt-5 d-flex justify-content-center">
            <img src={aboutImg} alt="Banner Image" className='img-fluid' />
          </div>
          <p className="lead fs-5">Travor is one of the most popular Travel agency for those explore the world and try to make adventure as well as we can beautiful destination around the world and make you trip you explore the beautiful Maldives with great facilities <br /><br />Travor is one of the most popular Travel agency for those  explore the world and try to make adventure as we provide beautiful destination around the world and make you trip</p>
        </div>
        <div className="col-12 col-md-6 col-lg-5 d-none d-md-block d-flex justify-content-center">
          <img src={aboutImg} alt="Banner Image" className='img-fluid' />
        </div>
      </div>
      <div className="row col-12 col-md-11 d-flex py-0">
        <h1 className="lead fs-2 fw-bold">Basic <span className="text-orange text-decoration-underline">Information</span></h1>
        <p className="lead fs-5 col-12 col-md-8 col-lg-7">Some Basic information about {data.title} that can help you a lot when you visit so check out all the information before starting your tour</p>
        <div className="col-12 d-flex-row m-auto mb-3 px-md-4 ps-md-5">
          {
            data.details.map((e,i) => {
              return (
                <div key={i} className="col-12 col-md-10 row d-flex flex-column flex-md-row border-1 border-dotted border-bottom justify-content-between align-items-center py-md-3 py-2 m-0">
                  <h2 className="col-12 col-md-4 lead fs-5 fw-normal text-md-start text-center">{e[0]}</h2>
                  <h2 className="col-12 col-md-8 lead fs-6 fw-normal text-md-start text-center">{e[1]}</h2>
                </div>
              )
            })
          }
        </div>
      </div>
      <Gallery/>
    </div>
  )
}

export default CatlogPage