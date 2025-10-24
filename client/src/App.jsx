
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Crausel from './pages/Crausel';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Cart />
      <Crausel />
      <Footer />
      {/* <h1 className='text-2xl'>App </h1> */}
    </div>
  )
}

export default App
