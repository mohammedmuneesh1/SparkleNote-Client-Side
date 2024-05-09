import React, { useEffect } from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import Aos from 'aos';
export default function LandingPageLayout() {
  
    useEffect(() => {
      Aos.init();
    }, []);

    return (
      <div className='max-w-screen mx-auto min-h-screen bg-green-400'>
      <Header/>
      <Outlet/>
      <Footer/>
      
      </div>
    );
  }
  