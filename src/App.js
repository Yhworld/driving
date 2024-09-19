import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Homepage from './pages/Homepage';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Homepage />
     <Footer />
    </div>
  );
}

export default App;
