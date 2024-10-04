import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Navbar/Topbar';
import ScrollToTop from './pages/ScrollToTop';
import Footer from './pages/Footer';
import WhatsAppButton from './components/floating/WhatsappButton';
import ScrollToTopButton from './components/floating/ScrollToTopButton';
import Loader from './components/Loader/Loader';

// Lazy loading components for better performance
const Homepage = lazy(() => import('./pages/Homepage'));
const Beginner = lazy(() => import('./components/courses/Beginner'));
const Refresher = lazy(() => import('./components/courses/Refresher'));
const Pass = lazy(() => import('./components/courses/Pass'));
const AboutPage = lazy(() => import('./components/About/AboutPage'));
const Areas = lazy(() => import('./components/Areas/Areas'));
const BookingForm = lazy(() => import('./components/Booking/Booking'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <ScrollToTop />

      {/* Adding Suspense to show a fallback while the component is loading */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/refresher-course" element={<Refresher />} />
          <Route path="/crash-course" element={<Pass />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
