import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import React, { useEffect } from "react";
import Footer from './components/footer/Footer'
import AOS from 'aos';
import "./aos.css";
// import Services from './components/services/Services'

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (

    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />

    </>


  )
}

export default App