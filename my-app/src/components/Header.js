import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='container-header'>
      <h5>Crypto Mi</h5>
      <div className='login-icon'>
        <button>Login</button>
        <button>Cart</button>
      </div>
    </div>
  )
}

export default Header
