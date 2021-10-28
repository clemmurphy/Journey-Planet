import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Navbar = ({ loggedIn, setLoggedIn, setUserHome }) => {

  const history = useHistory()

  const logoutUser = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
    setUserHome(null)
    history.push('/')
  }

  return (
    <nav id="mainNavbar">
      <div className="navbar-brand"><h2><Link to='/'><i className="fas fa-globe-europe"></i><span className="navbar-text"> Journey Planet</span></Link></h2></div>
      <div className="navbar-nav">
        <ul>
          { loggedIn ? 
            <li><a onClick={logoutUser}><i className="fas fa-sign-out-alt"></i><span className="navbar-text"> Logout</span></a></li>
            :
            <>
              <li><Link to='/login'><i className="fas fa-sign-in-alt"></i><span className="navbar-text"> Login</span></Link></li>
              <li><Link to='/register'><i className="fas fa-user-plus"></i><span className="navbar-text"> Register</span></Link></li>
            </>
          }
          <li><Link to='/search'><i className="fas fa-map-signs"></i><span className="navbar-text"> New Journey</span></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar