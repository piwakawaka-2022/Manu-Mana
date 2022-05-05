import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { checkAuth } from '../actions/auth'
import Nav from './Nav'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import GlobalBirdList from './GlobalBirdList'
import Bird from './Bird'

function App () {
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  useEffect(() => {
    const confirmSuccess = () => {}
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="colomn">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birdlist" element={<GlobalBirdList />} />
          <Route path='/birds/:id'element={<Bird />} />
          {!auth.isAuthenticated && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </div>
    </>
  )
}

export default App
