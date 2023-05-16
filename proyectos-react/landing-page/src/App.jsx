// import { useState } from 'react'
import './App.css'

import { Navbar } from "./components/Navbar"
import { Hero } from './components/Hero'
import { About } from './components/About'
import { OurServices } from './components/OurServices'
import { Tours } from './components/Tours'
import { Footer } from './components/Footer'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <OurServices/>
      <Tours/>
      <Footer/>
    </>
  );
};

export default App;
