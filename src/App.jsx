import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './compo/navbar';
import Home from './pages/home';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './compo/footer'
import Subcribe from './compo/utils/subcribe'
import Aos from 'aos';
import Destination from './pages/destination';
import PackagePage from './pages/packagePage';
import Offers from './pages/offers';
import About from './pages/about';
import Login from './pages/registerPages/login';
import Signup from './pages/registerPages/signup';
import CatlogPage from './pages/spotDetails';
import PlacePackage from './pages/packageInfo';
import NoPage from './pages/noPage';
function App() {
  const {pathname}=useLocation()
  useEffect(() => {
    window.scroll(0,0)
  }, [pathname])
  Aos.init()
  return (
    <div className="container-fluid p-0 overflow-hidden d-flex flex-column align-items-center">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/package' element={<PackagePage />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/packagePage' element={<PlacePackage />} />
        <Route path='/destination/catlog' element={<CatlogPage />} />
        <Route path='/*' element={<NoPage/>} />
      </Routes>
      <Subcribe />
      <Footer />
    </div>
  );
}

export default App
