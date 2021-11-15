import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = ({ setLoggedIn, setUserHome }) => {

  // Initialize history object
  const history = useHistory()

  // Store form data in state
  const [ formData, setFormData ] = useState({})

  // Reset form data on page load
  useEffect(() => {
    setFormData({})
  }, [setFormData])

  // Update form data on input
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  // Send form data to server to register user
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('api/users/login/', formData)
      localStorage.setItem('token', data.token)
      setLoggedIn(true)
      history.push('/search')
    } catch (err) {
      const errorMessage = err.request.responseText
    }
  }

  return (
    <div id="loginWrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" autoComplete="username" placeholder="Username" onInput={handleInput} />
        <input type="password" name="password" id="password" placeholder="Password" autoComplete="current-password" onInput={handleInput} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login