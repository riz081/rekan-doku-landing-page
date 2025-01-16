import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home, EMaterai, ESign, SignMaterai, CorporateBusiness, Help } from "./layouts/Landing";
import { 
  LoginPage, BuyMaterai,
  BuyHistory, DabDokumen,
  DabHistory
} from "./layouts/Admin";
import { Navbar, Footer, WhatsAppButton, ScrollUpButton } from "./components";
import {
  Product, Trust, Solution, Step, Legality, Sales, Testimonials, BenefitMaterai, UsingMaterai,
  ProgressMaterai, BenefitSign, UsingSign, ProgressSign, BenefitSignMaterai, UsingSignMaterai,
  ProgressSignMaterai, BenefitCorporate, UsingCorporate, ProgressCorporate, Schedule
} from "./pages";

/**
 * ScrollToTop component: Scrolls to the top of the page whenever the pathname changes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

/**
 * Layout component to wrap routes that need Navbar, Footer, WhatsAppButton, and ScrollUpButton.
 */
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
    <ScrollToTop />
    <WhatsAppButton />
  </>
);

const App = () => {
  useEffect(() => {
    // Add Google font for Montserrat
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden relative">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={
            <Layout>
              <Home />
              <Product />
              <Trust />
              <Solution />
              <Step />
              <Legality />
              <Sales />
              <Testimonials />
            </Layout>
          } />
          <Route path="/doku-stamp/e-materai" element={
            <Layout>
              <EMaterai />
              <BenefitMaterai />
              <UsingMaterai />
              <ProgressMaterai />
              <ScrollUpButton />
            </Layout>
          } />
          <Route path="/doku-stamp/e-sign" element={
            <Layout>
              <ESign />
              <BenefitSign />
              <UsingSign />
              <ProgressSign />
              <ScrollUpButton />
            </Layout>
          } />
          <Route path="/doku-stamp/e-sign-materai" element={
            <Layout>
              <SignMaterai />
              <BenefitSignMaterai />
              <UsingSignMaterai />
              <ProgressSignMaterai />
              <ScrollUpButton />
            </Layout>
          } />
          <Route path="/doku-stamp/corporate-business" element={
            <Layout>
              <CorporateBusiness />
              <BenefitCorporate />
              <UsingCorporate />
              <ProgressCorporate />
              <ScrollUpButton />
            </Layout>
          } />
          <Route path="/hubungi-kami" element={
            <Layout>
              <Help />
              <Schedule />
              <ScrollUpButton />
            </Layout>
          } />

          {/* Admin route */}
          <Route path="/auth-login" element={<LoginPage />} />

          <Route path="/admin/beli-materai" element={
            <Layout>
              <BuyMaterai />
            </Layout>
          } />

          <Route path="/admin/riwayat-pembelian" element={
            <Layout>
              <BuyHistory />
            </Layout>
          } />

          <Route path="/admin/bubuh-dokumen" element={
            <Layout>
              <DabDokumen />
            </Layout>
          } />

          <Route path="/admin/riwayat-pembubuhan" element={
            <Layout>
              <DabHistory/>
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
