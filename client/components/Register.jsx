import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginError, registerUserRequest } from '../actions/auth'

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

    if (confirm_password != password) {
      dispatch(loginError("Passwords don't match"))
    } else {
      const confirmSuccess = () => navigateTo('/')
      const userInfo = { ...formData }
      delete userInfo.confirm_password
      dispatch(registerUserRequest(userInfo, confirmSuccess))
    }
  }

  return (
    <form className="Register form box" onSubmit={handleSubmit}>
      <section className="section has-background-white">
        <h1 className="title is-2">Register</h1>
      </section>
      <hr />
      {auth.errorMessage && (
        <span className="has-text-danger is-large">{auth.errorMessage}</span>
      )}
      <label className="label is-large has-text-centered">
        <input
          required
          className="input has-text-centered is-large is-fullwidth"
          placeholder="User Name"
          type="text"
          name="username"
          autoComplete="username"
          onChange={handleChange}
          value={formData.username}
        />
      </label>
      <label className="label is-large has-text-centered">
        <input
          required
          className="input is-large has-text-centered is-fullwidth"
          placeholder="Contact Details"
          type="text"
          name="contact_details"
          onChange={handleChange}
          value={formData.contact_details}
        />
      </label>
      <label className="is-6 label is-large has-text-centered">
        <input
          required
          className="input is-large has-text-centered is-fullwidth"
          placeholder="Email Adress"
          type="text"
          name="email_address"
          onChange={handleChange}
          value={formData.email_address}
        />
      </label>
      <br />
      <label className="is-6 label is-large has-text-centered">
        <input
          required
          className="input is-large has-text-centered is-fullwidth"
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="new-password"
          onChange={handleChange}
          value={formData.password}
        />
      </label>
      <label className="is-6 label is-large has-text-centered">
        <input
          required
          className="input is-large has-text-centered is-fullwidth"
          placeholder="Password"
          type="password"
          name="confirm_password"
          autoComplete="new-password"
          onChange={handleChange}
          value={formData.confirm_password}
        />
      </label>
      <input
        className="button is-danger is-large is-fullwidth"
        value="Register"
        type="submit"
      />
    </form>
  )
}

export default Register
