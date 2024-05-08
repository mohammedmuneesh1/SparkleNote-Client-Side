import React, { useEffect } from "react";
import Header from "../Components/LandingPage Components/Header";
import Banner from "../Components/LandingPage Components/Banner";

import Footer from "../Components/LandingPage Components/Footer";
import Features from "../Components/LandingPage Components/Features";
import Faq from "../Components/LandingPage Components/Faq";
import Aos from "aos";
import Testimonials from "../Components/LandingPage Components/Testimonials";


export default function LandingPage() {

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    // <div className="mx-auto max-w-screen min-h-screen bg-red-400 pb-36">
    <>
      <Header />
      <Banner/>
      <Features/>
      <Testimonials/>
      <Faq/>
      <Footer/>
      </>
    
  );
}
