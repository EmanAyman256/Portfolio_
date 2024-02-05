import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
   <nav className="navbar navbar-expand-lg">
  <div className="container p-4 ">
    <Link className="navbar-brand " to="home">START FRAMEWORK</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link m-2 " to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link m-2 " to="portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link m-2 " to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
   </nav>

  </>
}
