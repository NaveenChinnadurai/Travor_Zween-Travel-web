import Navbar from './compo/navbar';
import Home from './pages/home';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './compo/footer'
function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App
