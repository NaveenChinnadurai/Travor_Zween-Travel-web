function Header(props) {
    const type=props.type
    return (
        <div className={`col-12 py-0 row d-flex align-items-center justify-content-center ${props.className}`}>
            <h5 className={`text-info text-center ${type == "subPage" ? "fs-4" : "fs-2"}`}  data-aos="fade-up">{props.title1}</h5>
            <h3 className={`fw-bold text-center ${type == "subPage" ? "display-6" : "display-4"}`} data-aos="fade-up">{props.title2}</h3>
            <p className="lead fs-5 col-12 col-md-8 col-lg-6 text-center " data-aos="fade-up">Travor is one of the most popular Travel agency for those who want to explore the world and try to make adventure</p>
        </div>
    )
}

export default Header