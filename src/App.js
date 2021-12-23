import React from 'react';
import Navbar from './components/NavBar';
import Header from './components/Header';
import Feature from './components/Feature';
import Offer from './components/Offer';
import About from './components/About';
import Contact from './components/Contact';

export default function App (){
    return(
        <>
        <Navbar/>
        <Header/>
        <Feature/>
        <Offer/>
        <About/>
        <Contact/>
        </>
    )
}