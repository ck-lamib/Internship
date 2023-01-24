import React from 'react'
import { Login } from './Login';
import { NavBar } from './NavBar';
import { Product } from './Product';
import { Slider } from './Slider.js';


export const Home = () => {
  return (
    <div>
        <NavBar />
      <Slider />
      <Product/>
      <Login/>
      {/* product component
      footer */}

    </div>
  )
}
