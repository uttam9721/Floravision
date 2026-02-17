
// import React from 'react'
// import Navbar from './components/Navbar';
// import Hero from './pages/Hero';
// import Footer from './components/Footer';
// // import Cart from './pages/Cart';
// import Crausel from './pages/Crausel';
// import Testimonials from './pages/Testimonials';
// import Plants from './pages/Plants';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <Plants />
//       <Testimonials />
//       <Crausel />
//       <Footer />

//     </div>
//   )
// }

// export default App



import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./pages/Hero";
import Plants from "./pages/Plants";
import Testimonials from "./pages/Testimonials";
import Crausel from "./pages/Crausel";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Address from "./pages/Address";

const Home = () => (
  <>
    <Hero />
    <Plants />
    <Testimonials />
    <Crausel />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/crausel" element={<Crausel />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/address" element={<Address/>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
