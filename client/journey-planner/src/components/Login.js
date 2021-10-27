import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

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
      console.log(data.message)
      localStorage.setItem('token', data.token)
      history.push('/search')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div id="loginWrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" autoComplete="none" placeholder="Username" onInput={handleInput} />
        <input type="password" name="password" id="password" placeholder="Password" onInput={handleInput} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login