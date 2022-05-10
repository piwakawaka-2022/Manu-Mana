import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, loginError } from '../actions/auth'
import { Container, TextField, Button, Box } from '@mui/material'

function Login () {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
    const confirmSuccess = () => navigateTo('/')
    dispatch(loginUser(formData, confirmSuccess))
  }

  return (
    <Container align='center'>
      <div>
        <Box height='100px'></Box>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>LOG INTO YOUR ACCOUNT</h1>
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
        <TextField className="register"
          required
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={handleChange}
          value={formData.password}
        />
        <div>
          <Button className="register"
            value="Login"
            type="submit"
            variant='contained'>
              LOGIN
          </Button>
        </div>
      </form>
      <div>
        <Box height='100px'></Box>
      </div>
    </Container>
  )
}

export default Login
