import React from 'react'
import { Redirect, Link } from 'react-router-dom'

const NavBar = () => {

  return(
    <div className="NavBar">
      <div class="top-bar NavBar">
        <div class="top-bar-left">
          <ul class="dropdown menu" data-dropdown-menu>
            <li>
              <button>
                <Link className="button-text" to="/">
                  <span className="red"> Open Wide </span>
                  <span className="green">Deli </span>
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div class="top-bar-right">
          <ul class="dropdown menu" data-dropdown-menu>
            <li>
              <a className=" NavBar button-text li-text" href="#">Menu</a>
              <ul class="menu vertical">
                <li>
                  <Link className=" NavBar button-text li-text" to="/open-wide-deli/food">
                    <span className="red"> Food </span>
                  </Link>
                </li>
                <li>
                  <Link className=" NavBar button-text li-text" to="/open-wide-deli/drinks">
                    <span className="red"> Drinks </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className=" NavBar button-text li-text" to="/open-wide-deli/location">
                <span className="red"> Location </span>
              </Link>
            </li>
            <li>
              <Link className=" NavBar button-text li-text" to="/open-wide-deli/about-us">
                <span className="red"> About Us </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar