import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/HeaderSection';
import About from './components/AboutSection';
import Portfolio from './components/PortfolioSection';
import Sercvices from './components/ServicesSection';
import Prices from './components/PricesSection';
import Contact from './components/ContactSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Sercvices />
        <Prices />
        <Contact />
        <Footer />
        </div>
    );
    }

export default App;