import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner-container'>
        <div className='banner-tittle'>
            <h1>Buy & sell crypto easily</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <button>Get started</button>
        </div>
        <div className='banner-image'>
            <img src='https://toka.b-cdn.net/wp-content/uploads/2022/02/3D_monitor_illustration_for_cryptocurrency.png'></img>
        </div>

    </div>
  )
}

export default Banner