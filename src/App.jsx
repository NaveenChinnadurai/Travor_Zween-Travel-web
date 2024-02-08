import Navbar from './compo/navbar';
import Home from './pages/home';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './compo/footer'
import Aos from 'aos';
function App() {
  Aos.init()
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App
