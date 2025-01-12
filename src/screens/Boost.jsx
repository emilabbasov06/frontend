import React from 'react'
import BoostComponent from '../components/BoostComponent';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <div className="mp-container">

      <Navbar />
      <BoostComponent />
      <Menu />

    </div>
  )
}

export default Home