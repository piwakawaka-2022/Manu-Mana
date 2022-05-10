/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginError, registerUserRequest } from '../actions/auth'
import { Container, TextField, Button, Box } from '@mui/material'

function Register () {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const [formData, setFormData] = useState({
    username: '',
    contact_details: '',
    email_address: '',
    password: '',
    confirm_password: ''
  })

  useEffect(() => {
    dispatch(loginError(''))
  }, [])

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    const { password, confirm_password } = formData

    if (confirm_password !== password) {
      dispatch(loginError("Passwords don't match"))
    } else {
      const confirmSuccess = () => navigateTo('/')
      const userInfo = { ...formData }
      delete userInfo.confirm_password
      dispatch(registerUserRequest(userInfo, confirmSuccess))
    }
  }

  return (
    <Container align='center'>
      <div>
        <Box height='100px'></Box>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>REGISTER ACCOUNT</h1>
        <br />
        {auth.errorMessage && (
          <span>{auth.errorMessage}</span>
        )}
        <TextField className="register"
          required
          placeholder="User Name"
          type="text"
          name="username"
          autoComplete="username"
          onChange={handleChange}
          value={formData.username}
        />
        <TextField
          required
          className="register"
          placeholder="Contact Details"
          type="text"
          name="contact_details"
          onChange={handleChange}
          value={formData.contact_details}
        />
        <TextField
          required
          className="register"
          placeholder="Email Address"
          type="text"
          name="email_address"
          onChange={handleChange}
          value={formData.email_address}
        />
        <br />
        <TextField
          required
          className="register"
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="new-password"
          onChange={handleChange}
          value={formData.password}
        />
        <TextField
          required
          className="register"
          placeholder="Confirm Password"
          type="password"
          name="confirm_password"
          autoComplete="new-password"
          onChange={handleChange}
          value={formData.confirm_password}
        />
        <div>
          <Button className='register-button'
            value="Register"
            type="submit"
            variant='contained'>
          REGISTER
          </Button>
        </div>
      </form>
      <div>
        <Box height='100px'></Box>
      </div>
    </Container>
  )
}

export default Register
