import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='con'>
        <div className='logo'>
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className='hero'>
          <img src="/assets/hero-img.png" alt="Hero" />
        </div>
        <div className='head'>
          <h2>Find <span>Movies</span> You'll Love Without the Hassel</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
