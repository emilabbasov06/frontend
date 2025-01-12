import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <div className="mp-container">

      <Navbar />
      <Hero />
      <Menu />

    </div>
  )
}

export default Home