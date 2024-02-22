import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './compo/navbar';
import Home from './pages/home';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './compo/footer'
import Subcribe from './compo/utils/subcribe'
import Aos from 'aos';
import Destination from './pages/destination';
import PackagePage from './pages/package';
import Offers from './pages/offers';
import About from './pages/about';
import Login from './pages/registerPages/login';
import Signup from './pages/registerPages/signup';
import CatlogPage from './pages/infoPages/spotDetails';
import PackageInfo from './pages/infoPages/packageInfo';
import NoPage from './pages/noPage';
import PuffLoader from "react-spinners/PuffLoader";
function App() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
    console.log("loaded")
  };

  useEffect(() => {
    window.addEventListener('load', handleLoad);
    window.scroll(0, 0)
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname])

  Aos.init()
  return (
    <div className="container-fluid p-0 overflow-hidden d-flex flex-column align-items-center">
      {
        loading ?
          (
            <div className="col-12 d-flex h-100 justify-content-center align-items-center">
              <PuffLoader color='#ff4500'/>
            </div>
          )
          :
          (
            <>
              <Navbar />
              <Routings />
              <Subcribe />
              <Footer />
            </>
          )

      }
    </div >
  )
}

function Routings() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destination' element={<Destination />} />
      <Route path='/package' element={<PackagePage />} />
      <Route path='/offers' element={<Offers />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/packagePage' element={<PackageInfo />} />
      <Route path='/destination/catlog' element={<CatlogPage />} />
      <Route path='/*' element={<NoPage />} />
    </Routes>
  )
}

export default App
