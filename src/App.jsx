// import { useState } from 'react'

import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';
import Services from './components/Services';

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <MyWork />
            <Contact />
        </>
    );
}
