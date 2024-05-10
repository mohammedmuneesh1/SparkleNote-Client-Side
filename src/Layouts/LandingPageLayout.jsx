import React from 'react';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
export default function LandingPageLayout() {

    return (
      <div className='max-w-screen mx-auto min-h-screen bg-green-400'>
      <Header/>
      <Outlet/>
      <Footer/>
      
      </div>
    );
  }
  