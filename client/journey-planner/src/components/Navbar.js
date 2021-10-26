import React from 'react'

const Navbar = () => {
  return (
    <nav id="mainNavbar">
      <div className="navbar-brand"><h1>Journey Planner</h1></div>
      <div className="navbar-nav">
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar