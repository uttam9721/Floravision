
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Crausel from './pages/Crausel';
import Testimonials from './pages/Testimonials';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cart />
      <Testimonials />
      <Crausel />
      <Footer />

    </div>
  )
}

export default App
