import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../actions/auth'
import { Button, ButtonGroup, Container } from '@mui/material'

import Box from '@mui/material/Box'

function Nav ({ activePage }) {
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
          width: '100%',
          height: '55vw',
          backgroundImage: `url(${'birds/MANA_MANU_BANNER.png'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          textAlign: 'center',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7]
          }
        }}
      />
      <nav>

        <Container align='center' colour='Primary'>
          <ButtonGroup colour='Primary' variant='text'>
            {activePage === '/' ? null : <Button><Link to='/'>HOME</Link></Button>}
            {activePage === '/birdlist' ? null : <Button><Link to='/birdlist' className=''> RECENT BIRD SIGHTINGS</Link></Button>}
            {activePage === '/bird-database' ? null : <Button><Link to='/bird-database'> BIRDS YOU ARE LIKELY TO SEE IN PŌNEKE </Link></Button>}
          </ButtonGroup>
          {auth.isAuthenticated ? (
            <>
              <ButtonGroup colour='Primary' align='right' variant='text'>
                <Button><Link to="/" className="navbar-item is-large" onClick={logout}>Logout</Link></Button>
                {activePage === `/user/${auth.user.id}` ? null : <Button><Link to={`/user/${auth.user.id}`}> YOUR BIRD SIGHTINGS </Link></Button>}
              </ButtonGroup>
            </>
          ) : (
            <>
              <ButtonGroup colour='Primary' align='right' variant='text'>
                <Button><Link to="/login" > LOGIN </Link></Button>
                <Button><Link to="/register" > REGISTER </Link></Button>
              </ButtonGroup>
            </>
          )}
        </Container>
      </nav>
    </>
  )
}

export default Nav
