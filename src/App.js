import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Navbar/Topbar';
import ScrollToTop from './pages/ScrollToTop';
import Footer from './pages/Footer';
import WhatsAppButton from './components/floating/WhatsappButton';
import ScrollToTopButton from './components/floating/ScrollToTopButton';
import Loader from './components/Loader/Loader';
import Contact from './components/Contact/Contact';

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
      <Helmet>
        <title>Makeit Driving - Learn to Drive with Confidence</title>
        <meta
          name="description"
          content="Makeit Driving is a trusted driving school in Manchester. We offer tailored driving lessons to suit your needs, ensuring you become a confident and safe driver."
        />
        {/* Open Graph and Twitter meta tags for social sharing */}
        <meta property="og:title" content="Makeit Driving - Learn to Drive with Confidence" />
        <meta
          property="og:description"
          content="Top Manchester driving school offering expert manual and automatic lessons with high pass rates."
        />
        {/* Referencing logo192.png */}
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/logo192.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/logo192.png`} />
      </Helmet>

      <Topbar />
      <Navbar />
      <ScrollToTop />

      {/* Adding Suspense to show a fallback while the component is loading */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Makeit Driving - Your Road to Success Starts Here</title>
                  <meta property="og:title" content="Makeit Driving - Your Road to Success Starts Here" />
                </Helmet>
                <Homepage />
              </>
            }
          />
          <Route
            path="/beginner"
            element={
              <>
                <Helmet>
                  <title>Beginner Driving Course - Start Learning Today | Makeit Driving</title>
                  <meta property="og:title" content="Beginner Driving Course - Start Learning Today | Makeit Driving" />
                </Helmet>
                <Beginner />
              </>
            }
          />
          <Route
            path="/refresher-course"
            element={
              <>
                <Helmet>
                  <title>Refresher Driving Course - Boost Your Confidence | Makeit Driving</title>
                  <meta property="og:title" content="Refresher Driving Course - Boost Your Confidence | Makeit Driving" />
                </Helmet>
                <Refresher />
              </>
            }
          />
          <Route
            path="/crash-course"
            element={
              <>
                <Helmet>
                  <title>Crash Course - Fast Track to Your License | Makeit Driving</title>
                  <meta property="og:title" content="Crash Course - Fast Track to Your License | Makeit Driving" />
                </Helmet>
                <Pass />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Makeit Driving - Your Trusted Manchester Driving School</title>
                  <meta property="og:title" content="About Makeit Driving - Your Trusted Manchester Driving School" />
                </Helmet>
                <AboutPage />
              </>
            }
          />
          <Route
            path="/areas"
            element={
              <>
                <Helmet>
                  <title>Driving Lessons in Your Area - Makeit Driving</title>
                  <meta property="og:title" content="Driving Lessons in Your Area - Makeit Driving" />
                </Helmet>
                <Areas />
              </>
            }
          />
          <Route
            path="/booking"
            element={
              <>
                <Helmet>
                  <title>Book Your Driving Lessons Today | Makeit Driving</title>
                  <meta property="og:title" content="Book Your Driving Lessons Today | Makeit Driving" />
                </Helmet>
                <BookingForm />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact Us - Makeit Driving</title>
                  <meta property="og:title" content="Contact Us - Makeit Driving" />
                </Helmet>
                <Contact />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <title>Page Not Found - Makeit Driving</title>
                  <meta property="og:title" content="Page Not Found - Makeit Driving" />
                </Helmet>
                <NotFound />
              </>
            }
          />
        </Routes>
      </Suspense>

      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
