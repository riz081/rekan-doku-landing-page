import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home, EMaterai, ESign } from "./layouts";
import { Navbar, Footer, WhatsAppButton, ScrollUpButton } from "./components";
import {
  Product, Trust, Solution,
  Step, Legality, Sales,
  Testimonials, BenefitMaterai, UsingMaterai,
  ProgressMaterai, BenefitSign, UsingSign,
  ProgressSign,
   
} from "./pages";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    if (pathname === '/doku-stamp/e-materai') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    if (pathname === '/doku-stamp/e-sign') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="overflow-x-hidden relative">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Product />
              <Trust />
              <Solution />
              <Step />
              <Legality />
              <Sales />
              <Testimonials />
            </>
          } />
          <Route path="/doku-stamp/e-materai" element={
            <>
              <EMaterai />
              <BenefitMaterai />
              <UsingMaterai/>
              <ProgressMaterai />
              <ScrollUpButton />
            </>
          } />
          <Route path="/doku-stamp/e-sign" element={
            <>
              <ESign />
              <BenefitSign />
              <UsingSign />
              <ProgressSign />
              <ScrollUpButton />
            </>
          } />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
