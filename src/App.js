import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import EXperience from './components/Experience/EXperience';
// import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Slider from './components/Slider/Slider';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <EXperience/>
      {/* <Services/> */}
      <Portfolio/>
      <Slider/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
