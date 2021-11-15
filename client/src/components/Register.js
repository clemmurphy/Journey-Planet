import React, { useState, useEffect } from 'react'
import SingleSearch from './SingleSearch'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

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
    if (formData.homeName) {
      delete formData.homeName
    }
    console.log('Form data to submit:', formData)
    try {
      await axios.post('api/users/register/', formData)
      console.log('👋 Registration successful')
      history.push('/login')
    } catch (err) {
      const errorMessage = err.request.responseText
      console.log(errorMessage)
    }
  }

  return (
    <div id="registerWrapper">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" autoComplete="username" placeholder="Username" onInput={handleInput} />
        <input type="text" name="firstName" id="first_name" autoComplete="given-name" placeholder="First Name" onInput={handleInput} />
        <input type="text" name="lastName" id="last_name" autoComplete="family-name" placeholder="Last Name" onInput={handleInput} />
        <input type="email" name="email" id="email" autoComplete="email" placeholder="Email" onInput={handleInput} />
        <input type="password" name="password" id="password"autoComplete="new-password" placeholder="Password" onInput={handleInput} />
        <input type="password" name="passwordConfirmation" id="password_confirmation" placeholder="Confirm Password" onInput={handleInput} />
        <SingleSearch setFormData={setFormData} formData={formData} />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register