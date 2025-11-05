import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
      <nav className='header-nav'>
        <ul className='nav-links'>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/about">About</a></li>
          <li><a href='/get-in-touch'>Get In Touch</a></li>
          <button className='btn btn-primary'>Partner Login</button>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderComponent