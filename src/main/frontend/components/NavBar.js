import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false)

  const smallNavbar = () => {
    if(window.scrollY >= 100){
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  window.addEventListener('scroll', smallNavbar)

  let classString = "top-bar NavBar sticky"
  if(scrolling){
    classString += ' active'
  }

  return(
    <nav className="navbar sticky">
      <div className="container-navbar-left">
        <button>
          <Link className="navbar-logo" to="/">Open Wide Deli</Link>
        </button>
      </div>
      <div className="container-navbar-right">
        <div className="dropdown">
          <button className="dropbtn">Menu Items ≡</button>
          <div className="dropdown-content">
            <Link className="" to="/open-wide-deli/food">Food</Link>
            <Link className="" to="/open-wide-deli/drinks">Drinks</Link>
          </div>
        </div>
          <Link className="" to="/open-wide-deli/location">Location</Link>
          <Link className="" to="/open-wide-deli/about-us">About Us</Link>
      </div>
    </nav>
  )
}

export default NavBar