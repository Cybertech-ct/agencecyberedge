import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import UrgencyBar from './components/UrgencyBar';
import HowItWorks from './components/HowItWorks';
import ShopPreview from './components/ShopPreview';
import SocialProof from './components/SocialProof';
import Offer from './components/Offer';
import About from './components/About';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <UrgencyBar />
      <HowItWorks />
      <ShopPreview />
      <SocialProof />
      <About />
      <Offer />
      <WhyUs />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
