import React from "react";
import Banner from "../Components/LandingPage Components/Banner";
import Features from "../Components/LandingPage Components/Features";
import Faq from "../Components/LandingPage Components/Faq";
import Testimonials from "../Components/LandingPage Components/Testimonials";

export default function LandingPage() {
  return (
    <div className="max-w-screen min-h-screen">
      <Banner />
      <Features />
      <Testimonials />
      <Faq />
    </div>
  );
}
