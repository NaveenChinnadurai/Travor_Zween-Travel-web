import Navbar from './compo/navbar';
import Home from './pages/home';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './compo/footer'
import Subcribe from './compo/utils/subcribe'
import Aos from 'aos';
import Destination from './pages/destination';
import { Route, Routes } from 'react-router-dom';
import PackagePage from './pages/packagePage';
import Offers from './pages/offers';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';
function App() {
  Aos.init()
  return (
    <div className="container-fluid p-0 overflow-hidden d-flex flex-column align-items-center">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/package' element={<PackagePage/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Subcribe/>
      <Footer/>
    </div>
  );
}

export default App
