import React from 'react';
import Hero from "./Components/Hero.jsx"
import About from "./Components/About.jsx";
import Navbar from "./Components/Navbar.jsx";
import Features from "./Components/Features.jsx";
import Story from "./Components/Story.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;
