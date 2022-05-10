import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Box } from '@mui/material'

import AddBirdSighting from './AddBirdSighting'

function Bird () {
  const birds = useSelector(globalState => globalState.birds)
  const auth = useSelector((redux) => redux.auth)

  const { id } = useParams()

  const birdData = birds.filter(bird => bird.id === Number(id))

  return (
    <>
      <div>
        <Box height='50px'></Box>
      </div>
      <div>{auth.isAuthenticated ? (<AddBirdSighting bird={birdData} />) : null }</div>
      <br/>
      <Container align='center'>
        <div className='bird-container'>
          <h1>{birdData[0]?.maori_name}</h1>
          <h2>{birdData[0]?.name}</h2>
          <img className='bird-profile' src={birdData[0]?.photo} />
          <Box height='50px'></Box>
          <p>{birdData[0]?.description}</p>
          <Box height='50px'></Box>
          <h3>KAITIAKI:</h3>
          <p>{birdData[0]?.meaning}</p>
        </div>
      </Container>
      <div>
        <Box height='150px'></Box>
      </div>
    </>
  )
}

export default Bird
