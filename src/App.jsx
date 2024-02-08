import Navbar from './compo/navbar';
import Home from './pages/home';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './compo/footer'
import Aos from 'aos';
import Destination from './pages/destination';
import { Route, Routes } from 'react-router-dom';
function App() {
  Aos.init()
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
