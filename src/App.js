import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Homepage from './pages/Homepage';
import Footer from './pages/Footer';
import Beginner from './components/courses/Beginner';
import Refresher from './components/courses/Refresher';
import Pass from './components/courses/Pass';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
      <Route path="/" element={ <Homepage /> } ></Route>
      <Route path="/beginner" element={  <Beginner /> } ></Route>
      <Route path="/refresher-course" element={ <Refresher /> } ></Route>
      <Route path="/pass-plus" element={ <Pass /> } ></Route>
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
