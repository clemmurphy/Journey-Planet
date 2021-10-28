import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div id='footerWrapper'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/search'>New Search</Link></li>
          <li><a href='https://github.com/clemmurphy' target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href='https://linkedin.com/in/clemmurphydev' target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
        <p>Made with 🚀 by Clement Murphy</p>
      </div>
    </>
  )
}

export default Footer