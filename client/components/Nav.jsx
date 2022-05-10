import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../actions/auth'
import { Button, ButtonGroup, Container } from '@mui/material'

import Box from '@mui/material/Box'

function Nav () {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const logout = () => {
    const confirmSuccess = () => navigateTo('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return (
    <>
    <Box
      sx={{
        width: `100%`,
        height: `55vw`,
        backgroundImage: `url(${'birds/MANA_MANU_BANNER.png'})` ,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        textAlign: `center`,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
      <nav>

        <Container align='center' colour='Primary'>
          <ButtonGroup colour='Primary' variant='Contained'>
            <Button><Link to="/">Home</Link></Button>
            <Button><Link to='/birdlist' className=''> List Of Recent Bird Sightings </Link></Button>
            <Button><Link to='/bird-database'> Birds You're Likely To See Around Poneke </Link></Button>
          </ButtonGroup>
          {auth.isAuthenticated ? (
            <>
              <ButtonGroup colour='Primary' align='right' variant='Contained'>
                <Button><Link to="/" className="navbar-item is-large" onClick={logout}>Logout</Link></Button>
                <Button><Link to={`/user/${auth.user.id}`}> Your Bird Sightings </Link></Button>
              </ButtonGroup>
            </>
          ) : (
            <>
              <ButtonGroup colour='Primary' align='right' variant='Contained'>
                <Button><Link to="/login" > Login </Link></Button>
                <Button><Link to="/register" > Register </Link></Button>
              </ButtonGroup>
            </>
          )}
        </Container>
      </nav>
    </>
  )
}

export default Nav
