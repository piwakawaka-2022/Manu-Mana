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
import UserPage from './UserPage'
import { getBirdsThunk, getSightingsThunk } from '../actions/birds'
import BirdSightingsList from './BirdSightingList'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { lightGreen, grey } from '@mui/material/colors'
import Footer from './Footer'

const theme = createTheme({
  palette: {
    primary: {
      light: grey[200],
      main: grey[400],
      dark: grey[900],
      contrastText: '#000'
    },
    secondary: {
      light: lightGreen[500],
      main: lightGreen[700],
      dark: lightGreen[900],
      contrastText: '#000'
    }
  },
  typography: {
    fontFamily: 'Tenor+Sans',
    fontWeightLight: 400,
    fontWeightRegular: 600,
    fontWeightBold: 900
  }
})

function App () {
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)
  useEffect(() => {
    const confirmSuccess = () => {}
    dispatch(checkAuth(confirmSuccess))
    dispatch(getBirdsThunk())
    dispatch(getSightingsThunk())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <div className="colomn">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birdlist" element={<BirdSightingsList />} />
          <Route path='/bird-database' element={<GlobalBirdList />} />
          <Route path='/birds/:id'element={<Bird />} />
          {!auth.isAuthenticated && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          {auth.isAuthenticated && (
            <>
              <Route path="/user/:id" element={<UserPage />}/>
            </>
          )}
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App
