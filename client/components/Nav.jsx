import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../actions/auth'

function Nav () {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const logout = () => {
    const confirmSuccess = () => navigateTo('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return (
    <nav>
      <div className="navbar">

        <Link to='/birdlist' className=''> See A list of recent sightings </Link>
      </div>
      <div className="navbar-auth">
        {auth.isAuthenticated ? (
          <>
            <Link to="/" className="navbar-item is-large" onClick={logout}>
                Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" > Login </Link>
            <Link to="/register" > Register </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
